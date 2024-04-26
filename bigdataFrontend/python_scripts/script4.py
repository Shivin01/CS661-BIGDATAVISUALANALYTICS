import json
import pandas as pd

# Load Excel data into a DataFrame
excel_data = pd.read_excel('2.3.3 - FTAs IN INDIA ACCORDING TO QUARTER DURING 2001-2021.xlsx')

# Convert DataFrame to JSON
json_data = excel_data.set_index('YEAR').to_dict(orient='index')

# Define the output file path
output_file_path = 'output4.json'

# Write JSON data to the output file
with open(output_file_path, 'w') as json_file:
    json.dump(json_data, json_file, indent=2)

print(f"JSON data saved to '{output_file_path}'.")
#for stacked bar chart