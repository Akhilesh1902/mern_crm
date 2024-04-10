const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    // Main Information
    CompanyName: {
      type: String,
      unique: true,
      required: [true, 'Company Name is required.'],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    // Address Information
    BillingAddress: {
      Street: {
        type: String,
        trim: true,
      },
      City: { type: String, trim: true },
      State: { type: String, trim: true },
      BillingCode: { type: String, trim: true }, // Khtissar
      PostalCode: {
        type: String,
        trim: true,
        validate: {
          validator: (postalCode) => /^\d{5}(-\d{4})?$/.test(postalCode),
          message: 'Please enter a valid postal code.',
        },
      },
    },

    ShippingAddress: {
      Street: { type: String, trim: true },
      City: { type: String, trim: true },
      ShippingCode: { type: String, trim: true },
      PostalCode: {
        type: String,
        trim: true,
        validate: {
          validator: (postalCode) => /^\d{5}(-\d{4})?$/.test(postalCode),
          message: 'Please enter a valid postal code.',
        },
      },
    },

    // Company Relationships
    Owner: { type: mongoose.Types.ObjectId, ref: 'User' }, // User lookup
    ParentCompany: { type: mongoose.Types.ObjectId, ref: 'Company' }, // Optional lookup for parent company

    // Descriptive Information
    Description: { type: String, trim: true, maxlength: 255 },
    Rating: {
      type: String,
      trim: true,
      enum: ['Aqcuired', 'Active', 'Market Failed', 'Project Cancelled', 'Shut Down'],
    },
    Website: {
      type: String,
      unique: true,
      trim: true,
      validate: {
        validator: (url) => /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})([/\w .-]*)*\/?$/.test(url),
        message: (props) => `${props.value} is not a valid website URL.`,
      },
    },
    TickerSymbol: { type: String, trim: true, uppercase: true }, // (AAPL, TSLA ...)

    // Company Details
    companyType: {
      type: String,
      // required: true,
      trim: true,
      maxlength: 16,
      // enum: ['Customer', 'Partner', 'Vendor'],
    },
    Ownership: {
      type: String,
      // required: true,
      trim: true,
      maxlength: 16,
      // enum: ['Public', 'Private', 'Government'], // sync with lfront
    },
    Industry: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
      // enum: ['Technology', 'Finance', 'Education','Real Estate'...], // synci l'front!
    },
    Employees: { type: Number, min: 1 }, // Set a minimum for employee count
    AnnualRevenue: { type: mongoose.Types.Decimal128 },

    // Optional Information
    Tag: { type: String, trim: true },

    // System Information
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ModifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    LastActivityTime: Date,
    RecordId: Number, // Optional (unique ID from original data source)
    // Virtuals
    // None for the moment
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Company', CompanySchema);
