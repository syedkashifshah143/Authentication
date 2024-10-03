import multer from 'multer';
import productsModel from '../models/productsModels.js'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });


export const newUser = async (req, res) => {
    try {
       
        const { name, price } = req.body;
        const image = req.file ? req.file.path : null;

        const user = new productsModel({ name, price, image });
        await user.save();

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

export const uploadImage = upload.single('image');


export const getUser = async (req, res) => {
    try {
        const users = await productsModel.find();
        res.status(200).json({ message: "User data retrieved", users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateUser = await productsModel.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updateUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await productsModel.findByIdAndDelete(userId);

        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}
