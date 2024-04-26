import json

# Load data from JSON file
with open('agewise.json', 'r') as file:
    data = json.load(file)

# Dictionary to hold the transformed data
transformed_data = {}

# Extract and process data for each age group
for age_group in ["0-14", "15-24", "25-34", "35-44", "45-54", "55-64", "Above"]:
    transformed_data[age_group] = {}
    for entry in data:
        country = entry["Country"]
        years_data = {entry["Year"]: entry[age_group]}

        if country in transformed_data[age_group]:
            transformed_data[age_group][country].update(years_data)
        else:
            transformed_data[age_group][country] = years_data

# Write the transformed data to a new JSON file
with open('transformed_data.json', 'w') as file:
    json.dump(transformed_data, file, indent=4)

# Print the transformed data (optional)
print(json.dumps(transformed_data, indent=4))
