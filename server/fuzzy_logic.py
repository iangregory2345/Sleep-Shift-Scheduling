"""
Antecednets (Inputs)
    *Nutrition*
    Universe (ie, crisp value range): How much energy did the person consume, on a scale of 0 to 5000?
    Fuzzy set (ie, fuzzy value range): low, good, high

    *Exercise*
    Universe: How much exercise did this person do in minutes, on a scale of 0 to 240?
    Fuzzy set: low, good, high

Consequents (Outputs)
    *Sleep*
    Universe: How much hours should this person sleep, on a scale of 0 to 12
    Fuzzy set: less, normal, high

Rules
IF the exercise was low, THEN the sleep will be high.
IF the nutrition was low, THEN the sleep will be high.

"""

import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# New Antecedent/Consequent objects hold universe variables and membership functions
nutrition = ctrl.Antecedent(np.arange(0, 5001, 1), 'nutrition')
exercise = ctrl.Antecedent(np.arange(0, 241, 1), 'exercise')
sleep = ctrl.Consequent(np.arange(0, 12, 1), 'sleep')

# Custom membership functions can be built interactively with a familiar,
# Pythonic API
nutrition['low'] = fuzz.trimf(tip.universe, [0, 0, 13])
nutrition['good'] = fuzz.trimf(tip.universe, [0, 13, 25])
nutrition['high'] = fuzz.trimf(tip.universe, [13, 25, 25])

exercise['low'] = fuzz.trimf(tip.universe, [0, 0, 13])
exercise['good'] = fuzz.trimf(tip.universe, [0, 13, 25])
exercise['high'] = fuzz.trimf(tip.universe, [13, 25, 25])

sleep['less'] = fuzz.trimf(tip.universe, [0, 0, 13])
sleep['normal'] = fuzz.trimf(tip.universe, [0, 13, 25])
sleep['high'] = fuzz.trimf(tip.universe, [13, 25, 25])

# You can see how these look with .view()
nutrition.view()
exercise.view()
sleep.view()

# Rules
rule1 = ctrl.Rule(nutrition['low'] | exercise['low'], sleep['low'])
rule2 = ctrl.Rule(exercise['good'], sleep['medium'])
rule3 = ctrl.Rule(nutrition['good'] | exercise['good'], sleep['high'])

rule1.view()

# Control System Creation and Simulation
tipping_ctrl = ctrl.ControlSystem([rule1, rule2, rule3])
tipping = ctrl.ControlSystemSimulation(tipping_ctrl)

# Pass inputs to the ControlSystem using Antecedent labels with Pythonic API
# Note: if you like passing many inputs all at once, use .inputs(dict_of_data)
tipping.input['exercise'] = 60
tipping.input['nutrition'] = 3700

# Crunch the numbers
tipping.compute()

print(tipping.output['sleep'])
tip.view(sim=tipping)