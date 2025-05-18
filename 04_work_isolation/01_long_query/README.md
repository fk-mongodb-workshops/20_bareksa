# Long Query

## Run 01_generate_dummy_data.bat

## Run 02_update_data.bat

Check the Realtime, inspect query targetting and query execution time, etc.
![image](https://github.com/user-attachments/assets/9230bb07-02cd-40bc-a667-6e9fe77b90f9)

Check the Metrics too
![image](https://github.com/user-attachments/assets/b504f5f6-a566-4946-9215-b745c4a222d9)

Check the Query Insights > Query Profiler, inspect 'long_query.customers' update, click of the operation, showing 'QUERY RAN WITHOUT AN INDEX', and show 'View Full Parsed Log' to analyse the 'plan'
![image](https://github.com/user-attachments/assets/f610ebd7-372d-4db5-94e3-92cebe9e681a)

![image](https://github.com/user-attachments/assets/6fa51b51-492a-4ff8-b4bb-f81061721274)

![image](https://github.com/user-attachments/assets/39140af2-810d-4678-87cf-a147c7f01516)

![image](https://github.com/user-attachments/assets/9462adbe-edfe-4a15-91a0-6e5aeb33af3e)

After at last 10 mins, check the Performance Advisor, see if the index recommendation appears
![image](https://github.com/user-attachments/assets/ae82835f-483c-4886-822b-af0acbc866af)
