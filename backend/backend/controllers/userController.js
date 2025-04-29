
        exports.addPoints = async (req, res) => {
          const { userId, points } = req.body;
          const user = await User.findById(userId);
          user.points += points;
          await user.save();
          res.status(200).json({ message: "Points added", points: user.points });
        };
    