module.exports =
{
    mode:   "01",
    pid:    "53",
    name:   "absevapsys_vappress",
    description: "Absolute Evap system Vapor Pressure",

    min:    0,
    max:    327675,
    unit:   "kPa",

    bytes:  2,
    convertToUseful: function( byteA, byteB )
    {
        return ( ( parseInt( byteA, 16 ) * 256 ) + parseInt( byteB, 16 ) ) / 200;
    }
};