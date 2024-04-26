import pandas as pd
import json

# Read Excel file
excel_file = '2.3.1 - MONTH-WISE NUMBER & PERCENTAGE SHARE OF FTAs IN INDIA DURING 2005-2021.xlsx' 
df = pd.read_excel(excel_file, index_col=0)

# Convert to JSON
data = {}
for year in df.columns:
    values = {}
    for month in df.index:
        values[month] = df.loc[month, year]
    data[year] = values

# Save JSON to a file
json_file = 'output1.json' 
with open(json_file, 'w') as f:
    f.write(json.dumps(data, indent=4))

print("JSON file saved successfully!")
