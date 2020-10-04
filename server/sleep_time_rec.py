import constants
import sys


class Schedule:
    sleep_hours = -1
    sleep_time = -1
    breakfast_hours = -1
    breakfast_time = -1
    lunch_hours = -1
    lunch_time = -1
    afternoon_snack_time = -1
    dinner_hours = -1
    dinner_time = -1
    exercise_hours = - 1
    exercise_time = - 1


    def __init__(self, work_start_time, work_end_time, average_travel_time, age, sleep_pattern):
        self.work_start_time = work_start_time
        self.work_end_time = work_end_time
        self.average_travel_time = average_travel_time
        self.age = age
        self.sleep_pattern = sleep_pattern

        self.calulate_sleep()
        self.getBreakfastTime()
        self.getLunchTime()
        self.getAfternoonSnackTime()
        self.getDinnerTime()
        self.getExerciseTime()

    def __str__(self):
        print_value = ""

        print_value += "Sleep Schedule with "
        print_value += ("Preference of " + str(self.sleep_pattern) +
                        " hour(s)\n") if (self.sleep_pattern) else ("no Preference\n")
        print_value += "User is recommended to sleep for " + \
            str(self.sleep_hours) + " hours starting from " + \
            str(self.sleep_time) + " hours\n"

        print_value += "Breakfast time should be from " + \
            str(self.breakfast_time) + " hours to " + \
            str(self.breakfast_hours) + " hours\n"

        print_value += "Lunch time should be from " + \
            str(self.lunch_time) + " hours to " + \
            str(self.lunch_hours) + " hours\n"

        print_value += "Dinner time should at " + \
            str(self.dinner_time) + " hours to " + \
            str(self.dinner_hours) + " hours\n"

        print_value += "Exercise time should at " + \
            str(self.exercise_time) + " hours to " + \
            str(self.exercise_hours) + " hours\n"

        return print_value

    """
    Time return will be in 24 hours
    """
    def calulate_sleep(self):
        self.sleep_hours = self.sleep_pattern if (
            self.sleep_pattern) else self.getSleepHours()

        self.sleep_time = (self.work_start_time - self.sleep_hours -
                           constants.time_breakfast -
                           self.average_travel_time) % 24

    def getBreakfastTime(self):
        self.breakfast_time = (self.sleep_time + self.sleep_hours) % 24
        self.breakfast_hours = (self.breakfast_time + constants.time_breakfast) % 24

    def getLunchTime(self):
        self.lunch_time = (self.breakfast_time + constants.time_have_lunch) % 24
        self.lunch_hours = (self.lunch_time + constants.time_lunch) % 24

    def getAfternoonSnackTime(self):
        self.afternoon_snack_time = (self.lunch_time + constants.time_have_afternoon_snack) % 24

    def getDinnerTime(self):
        self.dinner_time = (self.work_end_time + self.average_travel_time) % 24
        self.dinner_hours = (self.dinner_time + constants.time_dinner) % 24

    def getExerciseTime(self):
        self.exercise_time = (self.dinner_hours + constants.time_execise_wait_after_food) % 24
        self.exercise_hours = (self.exercise_time + constants.time_execise) % 24


    """
    Used to get the number of hours user should be sleeping
    """

    def getSleepHours(self):
        if (self.ifChild()):
            return 10
        elif (self.ifTeen()):
            return 9
        elif (self.ifAdult()):
            return 8
        elif (self.ifOlderAdult()):
            return 7

    """
    To determine which category the user falls under
    based on the age of the user
    """

    def ifChild(self):
        return self.age <= 13

    def ifTeen(self):
        return 14 <= self.age <= 17

    def ifAdult(self):
        return 18 <= self.age <= 64

    def ifOlderAdult(self):
        return 65 <= self.age


if __name__ == "__main__":
    # if (sys.argv.count == 4):
    sleep = Schedule(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5])
    print({"sleep_hours": sleep.sleep_hours, "exercise_time": sleep.exercise_time, "exercise_hours": sleep.exercise_hours})
    # else:
    #     sleep = Schedule(9, 17, 1, 27, 7)
    #     # print(sleep)
    #     print({"sleep_hours": sleep.sleep_hours, "exercise_time": sleep.exercise_time, "exercise_hours": sleep.exercise_hours})
    #     print(sleep.sleep_hours)
    #     print(sleep.sleep_time)
    # # breakfast_hours = -1
    # # breakfast_time = -1
    # # lunch_hours = -1
    # # lunch_time = -1
    # # afternoon_snack_time = -1
    # # dinner_hours = -1
    # # dinner_time = -1
    # print(sleep.exercise_time)
    # print(sleep.exercise_hours)


        # sleep = Schedule(9, 17, 1, 27, None)
        # print(sleep)
