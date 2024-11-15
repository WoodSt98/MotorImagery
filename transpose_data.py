import json
import pandas as pd

# take an argument in command line to specify the path to the JSON file
import sys

participant_num = sys.argv[1]

# Function to extract data from a JSON structure
def extract_data_from_json(json_file):
    with open(json_file, 'r') as file:
        data_og = json.load(file)
    
    data = json.loads(data_og['data'])
    return data


# Main function to read JSON, extract data, and save to CSV
def main():
    json_file_path = f'./data/participant_{participant_num}.json'  # Path to your JSON file
    output_csv_path = f'./data/participant_{participant_num}.csv'

    # Extract data
    extracted_data = extract_data_from_json(json_file_path)

    # Convert to DataFrame
    df = pd.DataFrame(extracted_data)
    df.drop(columns=['url', 'meta'], inplace=True)  # Drop unnecessary columns

    # Save to CSV
    df.to_csv(output_csv_path, index=False)
    print(f'Data has been saved to {output_csv_path}')

# Run the main function
if __name__ == "__main__":
    main()