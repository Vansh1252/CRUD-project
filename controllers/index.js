import Studenmodel from "../model/student.js"

class index {
    static createdoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body;

            if (!name || !age || !fees) {
                return res.status(400).send("All fields are required.");
            }
            const doc = new Studenmodel({
                name,
                age,
                fees
            });
            await doc.save();
            res.redirect("/index");
        } catch (error) {
            console.log("Error creating document:", error);
            res.status(500).send("Error creating document.");
        }
    };

    static getAlldoc = async (req, res) => {
        try {
            const result = await Studenmodel.find()
            // console.log(result);
            res.render("index", { Data: result });
        } catch (error) {
            console.log(error);
        }
    }
    static editdoc = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await Studenmodel.findById(req.params.id)
            console.log(result);
            res.render("edit", { data: result })
        } catch (error) {
            console.log(error);
        }
    }
    static updatedocbyid = async (req, res) => {

        try {
            const result = await Studenmodel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result);

            res.redirect("/index")
        } catch (error) {
            console.log(error);
        }
    }
    static deletedocbyId = async (req, res) => {

        try {
            const result = await Studenmodel.findByIdAndDelete(req.params.id)
            res.redirect("/index")
        } catch (error) {
            console.log(error);
        }
    }

}

export default index