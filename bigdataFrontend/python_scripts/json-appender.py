import json

# Function to append JSON files
def append_json_files(input_files, output_file):
    all_data = []

    # Iterate through input files
    for file_path in input_files:
        # Read data from each JSON file
        with open(file_path, 'r') as file:
            data = json.load(file)
            # Append data to all_data list
            all_data.extend(data)

    # Write the combined data to the output file
    with open(output_file, 'w') as file:
        json.dump(all_data, file, indent=4)

# Example usage
if __name__ == "__main__":
    input_files = ["output_2011.json", "output_2012.json", "output_2013.json","output_2014.json","output_2015.json","output_2016.json","output_2017.json","output_2018.json","output_2019.json","output_2020.json","output_2021.json"]  # Replace with your input file paths
    output_file = "combined_data.json"  # Replace with your output file path
    append_json_files(input_files, output_file)
