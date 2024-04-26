#Choropleth for NATIONALITY-WISE GENDER-WISE DISTRIBUTION OF FTAs IN INDIA

import pandas as pd
import json
import pycountry

# Initialize variables
data = []

# Define the list of tab names (years)
tab_names = ["2021","2020","2019","2018","2017","2016"]  # Update with your tab names

for tab_name in tab_names:
    # Read the Excel file
    # print(tab_name)
    # print()
    excel_file = "2.6.2 - NATIONALITY-WISE GENDER-WISE DISTRIBUTION OF FTAs IN INDIA, 2021.xlsx"
    df = pd.read_excel(excel_file, sheet_name=tab_name)
    # print(df.columns)

    # Initialize variables
    continent = ""

    # Iterate through each row
    for index, row in df.iterrows():
        # If it's a continent row
        #print(row['Country of Nationality'])
        if pd.notna(row['Country of Nationality']) and pd.isna(row['Total (In Numbers)']) and pd.isna(row['Female']) and pd.isna(row['Male']):
            continent = row['Country of Nationality']
        else:
            # Skip if Country of Nationality is "Total" or "Others"
            if row['Country of Nationality'].lower() in ["total", "others","non-classified elsewhere","grand total","not classified elsewhere"]:
                continue
            
            # Get ISO country code
            try:
                country = pycountry.countries.get(name=row['Country of Nationality'])
                iso_num = country.numeric
                iso_alpha = country.alpha_2
            except AttributeError:
                iso_num = None
                iso_alpha = None
            
            # If country not found, set ISO codes to None
            if not country:
                iso_num = None
                iso_alpha = None

            # If it's a country row
            country_data = {
                "Year": tab_name,
                "Continent": continent,
                "Country": row['Country of Nationality'],
                "Arrival": int(row['Total (In Numbers)']),
                "Male": float(row['Male']),
                "Female": float(row['Female']),
                "iso_alpha": iso_alpha,
                "iso_num": iso_num
            }
            data.append(country_data)

# Write the data to a JSON file
with open('output5.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
