import json
import os

extracted_dir = r"c:\Users\Admin\Downloads\OneDrive_2026-11-02\extracted_content"

# Load all 5 extracted presentations
with open(os.path.join(extracted_dir, "PM2-Combined-Overview-v2 - Day 1.json"), "r", encoding="utf-8") as f:
    day1_data = json.load(f)

with open(os.path.join(extracted_dir, "PM2-APIs-Integrations-Combined-v2 - Day 2.json"), "r", encoding="utf-8") as f:
    day2_data = json.load(f)

with open(os.path.join(extracted_dir, "PM2-Databases-DataModeling-Combined-Day 3.json"), "r", encoding="utf-8") as f:
    day3_data = json.load(f)

with open(os.path.join(extracted_dir, "PM2-Tech-Stacks-Guide.json"), "r", encoding="utf-8") as f:
    guide_data = json.load(f)

with open(os.path.join(extracted_dir, "Tech-Stacks-Python.json"), "r", encoding="utf-8") as f:
    python_data = json.load(f)

print("Loaded all 5 extracted presentation files successfully!")
