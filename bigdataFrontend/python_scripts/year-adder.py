import json

# Function to add year attribute to each array in the JSON file
def add_year_to_json(json_file, year):
    # Read the JSON file
    with open(json_file, 'r') as file:
        data = json.load(file)

    # Add year attribute to each array
    for item in data:
        item['Year'] = year

    # Write the updated data to the JSON file
    output_file = 'output_' + year + '.json'
    with open(output_file, 'w') as file:
        json.dump(data, file, indent=4)

# Prompt the user for JSON file input and year
json_input = input("Enter the JSON file path: ")
year_input = input("Enter the year: ")

# Add year attribute to each array in the JSON file
add_year_to_json(json_input, year_input)
