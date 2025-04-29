
        const moment = require('moment');

        exports.watchVideo = async (req, res) => {
          const { userId, videoId } = req.body;
          const user = await User.findById(userId);
          user.points += 5;
          await user.save();
          res.status(200).json({ message: "Points added", points: user.points });
        };

        exports.downloadVideo = async (req, res) => {
          const { userId, videoId } = req.body;
          const user = await User.findById(userId);

          const today = moment().format('YYYY-MM-DD');
          if (user.lastDownloadDate === today && !user.isPremium) {
            return res.status(403).json({ message: 'Daily limit reached. Upgrade to Premium.' });
          }

          user.lastDownloadDate = today;
          await user.save();
          res.download(`path/to/videos/${videoId}.mp4`);
        };
    