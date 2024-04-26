#grouped bar graph
import pandas as pd
import json

# Read the Excel file
excel_file = "2.3.2 - LEAN AND PEAK MONTHS OF FTAs IN INDIA FROM TOP 15 COUNTRIES DURING 2003-2021.xlsx"

# Initialize an empty dictionary to store the data
data = {}

# Define the list of tab names (years)
tab_names = ["2021", "2020", "2019","2018","2017","2016","2015", "2014","2012","2011", "2010","2008","2007","2006","2005","2004","2003"]  # Update with your tab names

for year in tab_names:
    # Read the data from the current tab (year)
    print(year)
    df = pd.read_excel(excel_file, sheet_name=year)
    print(df.columns)
    # Initialize an empty list to store nationality data for the current year
    nationality_data = []

    # Iterate through each row in the DataFrame
    for index, row in df.iterrows():
        nationality = row['Nationality']
        lean_month = row['Lean Month']
        peak_month = row['Peak Month']

        # Append the nationality data to the list
        nationality_data.append({
            "nationality": nationality,
            "lean": lean_month,
            "peak": peak_month
        })

    # Add the nationality data to the dictionary for the current year
    data[year] = nationality_data

# Write the data to a JSON file
with open('output7.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
