const Vendor = require('../models/VendorModel');
const { ObjectId } = require('mongodb');

const ViewVendor = async ({ vendor_status, vendor_username, vendor_name, email, contact_no, gender, company_name, company_GST_no, sort, select, page = 1, limit = 5 }) => {
    try {
        const queryObject = {};

        // ======= Filters Queries =======

        if (vendor_status !== undefined) {
            queryObject.Vendor_status = vendor_status.toLowerCase() === 'true';
        }
        if (vendor_username) {
            queryObject.vendor_username = {
                $regex: new RegExp(vendor_username, 'i'),
            };
        }
        if (vendor_name) {
            queryObject.vendor_name = { $regex: new RegExp(vendor_name, 'i') };
        }
        if (email) {
            queryObject.email = { $regex: new RegExp(email, 'i') };
        }
        if (gender) {
            queryObject.gender = { $regex: new RegExp(gender, 'i') };
        }
        if (company_name) {
            queryObject.company_name = { $regex: new RegExp(company_name, 'i') };
        }
        if (company_GST_no) {
            queryObject.company_GST_no = { $regex: new RegExp(company_GST_no, 'i') };
        }
        if (contact_no) {
            queryObject.contact_no = contact_no;
        }

        let apiData = Vendor.find(queryObject);

        // ======== Short , Select ======

        if (sort) {
            let sortFix = sort.replace(',', ' ');
            apiData = apiData.sort(sortFix);
        }
        if (select) {
            let selectFix = select.split(',').join(' ');
            apiData = apiData.select(selectFix);
        }

        // ===== Pagination and limits ====

        const skip = (page - 1) * limit;
        apiData = apiData.skip(skip).limit(limit);

        const Vendors = await apiData;
        return Vendors;
    } catch (error) {
        throw new Error('An error occurred while fetching vendors: ' + error.message);
    }
};

const AddVendor = async (data) => {
    const result = await Vendor(data).save();
    return result;
};

const SingleVendor = async (id) => {
    const filter = { _id: new ObjectId(id) };
    const result = await Vendor.findOne(filter);
    return result;
};

const DeleteVendor = async (id) => {
    const filter = { _id: new ObjectId(id) };
    const result = await Vendor.deleteOne(filter);
    return result;
};

const UpdateVendor = async (id, updateVendorData) => {
    const filter = { _id: id };
    const result = await Vendor.findByIdAndUpdate(filter, updateVendorData, {
        new: true,
    });
    return result;
};

module.exports = {
    ViewVendor,
    AddVendor,
    SingleVendor,
    DeleteVendor,
    UpdateVendor,
};
