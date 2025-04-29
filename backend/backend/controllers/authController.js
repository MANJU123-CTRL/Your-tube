
        const getRegion = require("../utils/geoLocation");
        const sendEmailOTP = require("../utils/otp").sendEmailOTP;
        const sendSMSOTP = require("../utils/otp").sendSMSOTP;

        exports.login = async (req, res) => {
          const { ip, loginTime } = req.body;
        
          const region = await getRegion(ip);
          const hour = new Date(loginTime).getHours();
        
          const southStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'];
          const isSouth = southStates.includes(region.state);
        
          if (isSouth) {
            await sendEmailOTP(req.body.email);
          } else {
            await sendSMSOTP(req.body.phone);
          }
        
          const isWhiteTheme = isSouth && hour >= 10 && hour <= 12;
          res.json({ theme: isWhiteTheme ? 'white' : 'dark' });
        };
    