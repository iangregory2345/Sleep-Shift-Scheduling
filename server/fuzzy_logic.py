"""
Antecednets (Inputs)
    *Nutrition*
    Universe (ie, crisp value range): How much energy did the person consume, on a scale of 0 to 5000?
    Fuzzy set (ie, fuzzy value range): low, good, high

    *Exercise Duration*
    Universe: How much exercise did this person do in minutes, on a scale of 0 to 24?
    Fuzzy set: low, good, high


Consequents (Outputs)
    *Sleep*
    Universe: How much hours should this person sleep, on a scale of 0 to 12
    Fuzzy set: less, normal, high

Rules
1) IF the exercise was high, THEN sleep will be high.
2) IF exercise was optimal, THEN sleep will be optimal.
3) IF exercise was low, THEN sleep will ?
4) IF nutrition was high, THEN ?


"""

import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

def get_optimum_nutrition(age, weight, height, sex):
    if sex == "m":
        return (66.5 + (13.8*weight) + (5*height) - (6.8*age)) * 1.6
    return (655.1+ (9.6*weight) + (1.9*height) - (4.7*age)) * 1.6

# New Antecedent/Consequent objects hold universe variables and membership functions
nutrition = ctrl.Antecedent(np.arange(0, 5001, 1), 'nutrition')
exercise = ctrl.Antecedent(np.arange(0, 25, 1), 'exercise')
sleep = ctrl.Consequent(np.arange(0, 25, 1), 'sleep')

# Custom membership functions can be built interactively with a familiar,
# Pythonic API
optimum_nutrition = get_optimum_nutrition(21, 66, 169, "m")
nutrition['less'] = fuzz.trimf(nutrition.universe, [0, 0, optimum_nutrition])
nutrition['normal'] = fuzz.trimf(nutrition.universe, [optimum_nutrition,optimum_nutrition, optimum_nutrition+100])
nutrition['high'] = fuzz.trimf(nutrition.universe, [optimum_nutrition, 5001, 5001])

exercise['less'] = fuzz.trimf(exercise.universe, [0, 0, 1])
exercise['normal'] = fuzz.trimf(exercise.universe, [1, 2, 3])
exercise['high'] = fuzz.trimf(exercise.universe, [1, 25, 25])

sleep['less'] = fuzz.trimf(sleep.universe, [0, 0, 6])
sleep['normal'] = fuzz.trimf(sleep.universe, [6, 6, 8])
sleep['high'] = fuzz.trimf(sleep.universe, [6, 25, 25])

# You can see how these look with .view()
nutrition.view()
exercise.view()
sleep.view()

# # Rules
# rule1 = ctrl.Rule(nutrition['less'] | exercise['less'], sleep['less'])
# rule2 = ctrl.Rule(exercise['high'], sleep['normal'])
# rule3 = ctrl.Rule(nutrition['high'] | exercise['high'], sleep['high'])

# rule1.view()

# # Control System Creation and Simulation
# tipping_ctrl = ctrl.ControlSystem([rule1, rule2, rule3])
# tipping = ctrl.ControlSystemSimulation(tipping_ctrl)

# # Pass inputs to the ControlSystem using Antecedent labels with Pythonic API
# # Note: if you like passing many inputs all at once, use .inputs(dict_of_data)
# tipping.input['exercise'] = 60
# tipping.input['nutrition'] = 3700

# # Crunch the numbers
# tipping.compute()

# print(tipping.output['sleep'])
# tip.view(sim=tipping)