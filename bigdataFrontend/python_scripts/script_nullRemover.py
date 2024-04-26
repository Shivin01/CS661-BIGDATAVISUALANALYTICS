#script to remove null values from json
import json

# Define the iso_mapping
iso_mapping = {
    "united states of america": ("US", "840"),
    "czech": ("CZ", "203"),
    "czech republic": ("CZ", "203"),
    "czech rep": ("CZ", "203"),
    "hungury": ("HU", "348"),
    "tanzania": ("TZ", "834"),
    "united republic of tanzania": ("TZ", "834"),
    "turkey": ("TR", "792"),
    "iran": ("IR", "364"),
    "phillippines": ("PH", "608"),
    "vietnam": ("VN", "704"),
    "korea (republic of)": ("KR", "410"),
    "korea(republic of)": ("KR", "410"),
    "republic of korea": ("KR","410"),
    "republic of china taiwan": ("TW", "158"),
    "taiwan": ("TW", "158"),
    "kazakhistan": ("KZ", "398"),
    "myanmar (burma)": ("MM", "104"),
}

# Read the JSON file
with open('output6.json', 'r') as file:
    data = json.load(file)

# Iterate through each country in the data
for entry in data:
    country_name = entry['Country']
    if country_name.lower() in iso_mapping:
        #print(country_name)
        # Update iso_alpha and iso_num values
        iso_alpha, iso_num = iso_mapping[country_name.lower()]
        # print(iso_alpha)
        # print(iso_num)
        entry['iso_alpha'] = iso_alpha
        entry['iso_num'] = iso_num

# Write the updated data back to the JSON file
with open('output6_updated.json', 'w') as file:
    json.dump(data, file, indent=4)
