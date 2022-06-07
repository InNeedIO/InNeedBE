from datetime import datetime

def timestamp():
    time_str = str(datetime.now())
    return time_str.split(".")[1]