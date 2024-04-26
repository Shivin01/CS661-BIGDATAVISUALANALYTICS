#pie chart

import pandas as pd
import json

# Read the Excel file
excel_file = "2.8.1 - DISTRIBUTION OF NATIONALITY-WISE FTAs IN INDIA ACCORDING TO PURPOSE, 2021 (in percentage).xlsx"

# Initialize an empty list to store all data
all_data = []

# Define the list of tab names (years)
tab_names = ["2021", "2020", "2019", "2018", "2017", "2016"]  # Update with your tab names

# Iterate through each tab (year)
for year in tab_names:
    # Read the data from the current tab (year)
    #print(year)
    df = pd.read_excel(excel_file, sheet_name=year)
    #print(df.columns)

    # Initialize variables
    continent = ""

    # Iterate through each row in the DataFrame
    for index, row in df.iterrows():
        # If it's a continent row
        if pd.notna(row['Country of Nationality']) and pd.isna(row['Business and Professional']) and pd.isna(row['Leisure Holiday and Recreation']):
            continent = row['Country of Nationality']
        else:
            # If it's not "Others" and not "total"
            if row['Country of Nationality'].lower() != "others" and row['Country of Nationality'].lower() != "total" and row['Country of Nationality'].lower() != "grand total" and row['Country of Nationality'].lower() != "not classified" and row['Country of Nationality'].lower() != "not classified elsewhere" and row['Country of Nationality'].lower() != "not classified\nelsewhere":
                # If it's a country row
                country_data = {
                    "Year": year,
                    "Continent": continent,
                    "Country": row['Country of Nationality'],
                    "Business and Professional": float(row['Business and Professional']),
                    "Leisure Holiday and Recreation": float(row['Leisure Holiday and Recreation']),
                    "Medical": float(row['Medical']),
                    "Indian Diaspora": float(row['Indian Diaspora']),
                    "Others": float(row['Others'])
                }
                all_data.append(country_data)


# Write the data to a JSON file
with open('output8_updated.json', 'w') as json_file:
    json.dump(all_data, json_file, indent=4)
