from flask import Flask, jsonify
import random

app = Flask(__name__)

# Simulating sunlight intensity and panel orientation data
@app.route('/get-sunlight', methods=['GET'])
def get_sunlight_data():
    sunlight_intensity = random.uniform(0, 100)  # Simulating sunlight intensity (0 to 100)
    panel_orientation = random.uniform(0, 180)  # Simulating panel angle (0 to 180 degrees)
    return jsonify({
        'sunlight_intensity': sunlight_intensity,
        'panel_orientation': panel_orientation
    })

if __name__ == "__main__":
    app.run(debug=True)
