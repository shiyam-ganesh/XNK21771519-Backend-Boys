import pandas
import json
# Read excel document using pandas as a dataframe
exceldata_df = pandas.read_excel('Book2.xlsx', sheet_name='Sheet1')

# Convert excel to string - orientation is from up to down
json_string = exceldata_df.to_json(orient='records')

# Make the string into a list to dump in the json file
json_list = json.loads(json_string)

# Define 
with open('data_ev.json', 'w') as json_file:
    json.dump(json_list, json_file)