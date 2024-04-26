import pandas as pd
import json

# Read Excel file
excel_file = '2.7.1 - FTAs IN INDIA ACCORDING TO AGE-GROUP DURING 2001-2021.xlsx'  
df = pd.read_excel(excel_file)
print(df.columns)

# Initialize data dictionary
data = {}

# Iterate over each row (year)
for index, row in df.iterrows():
    year = str(row['Year'])  # Convert year to string
    values = {
        '0-14': row['0-14'],
        '15-24': row['15-24'],
        '25-34': row['25-34'],
        '35-44': row['35-44'],
        '45-54': row['45-54'],
        '55-64': row['55-64'],
        '65 and Above': row['65 and Above'],
        'Not Reported': row['Not Reported']
    }
    data[year] = values

# Save JSON to a file
json_file = 'output3.json'  # Replace 'output.json' with your desired output file path
with open(json_file, 'w') as f:
    json.dump(data, f, indent=4)

print("JSON file saved successfully!")
# for piechart