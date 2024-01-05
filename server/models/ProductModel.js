const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the product
const ProductSchema = new Schema(
  {
    product_id: {
      type: Number,
    },
    product_HSN: {
      type: Number,
    },
    product_status: {
      type: Boolean,
    },
    admin_create_username: {
      type: String,
    },
    product_name: {
      type: String,
    },
    product_description: {
      type: String,
    },
    sub_type: {
      type: String,
    },
    product_img: {
      type: String,
    },
    basic_rate: {
      type: Number,
    },
    installation_charges: {
      type: Number,
    },
    total_price: {
      type: Number,
    },
    system_area: {
      length: {
        type: String,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
      },
    },
    suitable_cars: {
      length: {
        type: String,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
      },
    },
    lifting_capacity: {
      type: String,
    },
    platform_length: {
      type: String,
    },
    platform_width: {
      type: String,
    },
    driving_unit: {
      type: String,
    },
    travel_speed: {
      type: String,
    },
    power_source: {
      main: {
        type: String,
      },
      lighting: {
        type: String,
      },
    },
    power_consumption: {
      single_unit: {
        type: String,
      },
      combined_units: {
        type: String,
      },
    },
    operation_control: {
      type: String,
    },
    features: {
      1: {
        type: String,
      },
      2: {
        type: String,
      },
      3: {
        type: String,
      },
      4: {
        type: String,
      },
      5: {
        type: String,
      },
      6: {
        type: String,
      },
      7: {
        type: String,
      },
    },
    safety: {
      mechnical: {
        type: String,
      },
      hydraulic: {
        type: String,
      },
      electrical: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

// Create the model for the product schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;