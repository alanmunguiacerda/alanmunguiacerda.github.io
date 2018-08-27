import psutil

pids = psutil.pids()

for pid in pids:
    process = psutil.Process(pid)
    print(process.name())

