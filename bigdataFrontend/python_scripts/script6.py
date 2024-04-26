#Choropleth for 2.7.2 - DISTRIBUTION OF NATIONALITY-WISE FTAs IN INDIA ACCORDING TO AGE GROUP DURING 2021 (in percentage).xlsx
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
    excel_file = "2.7.2 - DISTRIBUTION OF NATIONALITY-WISE FTAs IN INDIA ACCORDING TO AGE GROUP DURING 2021 (in percentage).xlsx"
    df = pd.read_excel(excel_file, sheet_name=tab_name)
    #print(df.columns)
    # print(df.columns)

    # Initialize variables
    continent = ""

    # Iterate through each row
    for index, row in df.iterrows():
        # If it's a continent row
        #print(row['Country of Nationality'])
        if pd.notna(row['Country of Nationality']) and pd.isna(row['Total']) and pd.isna(row['0-14']) and pd.isna(row['35-44']):
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
                "Arrival": int(row['Total']),
                "0-14": float(row['0-14']),
                "15-24": float(row['15-24']),
                "25-34": float(row['25-34']),
                "35-44": float(row['35-44']),
                "45-54": float(row['45-54']),
                "55-64": float(row['55-64']),
                "Above": float(row['65 AND ABOVE']),
                "iso_alpha": iso_alpha,
                "iso_num": iso_num
            }
            data.append(country_data)

# Write the data to a JSON file
with open('output7.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
