var express = require('express');
const Property = require('../../modals/properties/Properties');
var router = express.Router()
router.post('/api/v1/properties/filter', async (req, res) => {
    try {
        const { location, checkIn, checkout, category, adults, children, infants, pets } = req.body;
        console.log(req.body);


        const query = {};


        if (location && location.trim() !== '') {
            query.region = location;
        }

        if (category && category.trim() !== '' && category !== 'Icons') {
            query.category = category;
        }

        if (adults || children || infants || pets) {
            if (adults) query['acceptableGuestAmount.adults'] = { $gte: adults };
            if (children) query['acceptableGuestAmount.children'] = { $gte: children };
            if (infants) query['acceptableGuestAmount.infants'] = { $gte: infants };
            if (pets) query['acceptableGuestAmount.pets'] = { $gte: pets };
        }


        let properties = await Property.find(query);

        if (checkIn) {
            properties = properties.filter(property => {
                const propertyStartDate = property.dates.startDate;
                return new Date(checkIn).getTime() <= propertyStartDate;
            });
        }

        if (checkout) {
            properties = properties.filter(property => {
                const propertyEndDate = property.dates.endDate;
                return new Date(checkout).getTime() >= propertyEndDate;
            });
        }
        res.status(200).json({
            success: true,
            count: properties.length,
            data: properties
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Bad Request',
            error: error.message
        });
    }
})

module.exports = router