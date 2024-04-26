import pandas as pd
import json

# Read Excel file
excel_file = '2.6.1 - FTAs IN INDIA THROUGH GENDER WISE DISTRIBUTION DURING 2001-2021.xlsx'  
df = pd.read_excel(excel_file)

# Print column names
# print(df.columns)

# Initialize data dictionary
data = {}

# Iterate over each row (year)
for index, row in df.iterrows():
    year = str(row['Year'])  # Convert year to string
    values = {
        'Male': row['Male'],
        'Female': row['Female'],
        'Not Reported': row['Not Reported']
    }
    data[year] = values

# Save JSON to a file
json_file = 'output2.json'  # Replace 'output.json' with your desired output file path
with open(json_file, 'w') as f:
    json.dump(data, f, indent=4)

print("JSON file saved successfully!")
# for piechart