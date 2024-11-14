import json
import pandas as pd

# take an argument in command line to specify the path to the JSON file
import sys


# Function to extract data from a JSON structure
def extract_data_from_json(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    all_extracted_data = []

    # Iterate through each hashcode and extract relevant data
    for hashcode, details in data.items():
        # Extract the 'data' field, which is a JSON string
        extracted_list = json.loads(details['data'])
        all_extracted_data.extend(extracted_list)

    return all_extracted_data

# Main function to read JSON, extract data, and save to CSV
def main():
    json_file_path = './data/data_participant_X.json'  # Path to your JSON file
    output_csv_path = './data/participant_X.csv'

    # Extract data
    extracted_data = extract_data_from_json(json_file_path)

    # Convert to DataFrame
    df = pd.DataFrame(extracted_data)

    # Save to CSV
    df.to_csv(output_csv_path, index=False)
    print(f'Data has been saved to {output_csv_path}')

# Run the main function
if __name__ == "__main__":
    main()