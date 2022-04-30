const express = require("express");
const db = require("../db");

const router = express.Router();

//router.get("/get", (req, res, next) => {
    //const selectQuery = `
        //SELECT id,
               //txt,
               //imageURL
          //FROM typeThree     
    //`;
    //try {
        //db.query(selectQuery, (error, rows) => {
            //if(error) {
                //throw error;
            //}

            //return res.status(200).json(rows);
        //})
    //} catch (error) {
        //console.error(error);
        //return res.status(400).send("데이터를 조회할 수 없습니다.");
    //};
//});

//router.post("/update", (req, res, next) => {
    //const {id ,txt} = req.body;

    //const updateQuery = `
        //UPDATE  typeThree
           //SET  txt = "${txt}"
         //WHERE  id = ${id}
    //`;

    //try {
        //db.query(updateQuery, (error, rows) => {
            //if(error) {
                //throw error;
            //}

            //return res.status(200).json({ result: true });
        //})
    //} catch (error) {
        //console.error(error);
        //return res.status(400).send("수정 할 수 없습니다.");
    //};
//});

router.get("/get", (req, res, next) => {
    const selectQuery = `
        SELECT id,
               txt,
               imageURL
          FROM typeThree   
    `;
    try {
        db.query(selectQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json(rows[0]);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("데이터를 조회할 수 없습니다.");
    };
});

router.post("/update", (req, res, next) => {
    const {txt} = req.body;

    const updateQuery = `
        UPDATE  typeThree
           SET  txt = "${txt}"
         WHERE  id = 1    
    `;
    
    try {
        db.query(updateQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json({ result: true });
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("수정 할 수 없습니다.");
    };
});

router.get("/get1", (req, res, next) => {
    const selectQuery = `
        SELECT id,
               txt,
               imageURL
          FROM typeThree   
    `;
    try {
        db.query(selectQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json(rows[1]);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("데이터를 조회할 수 없습니다.");
    };
});


router.post("/update1", (req, res, next) => {
    const {txt} = req.body;

    const updateQuery = `
        UPDATE  typeThree
           SET  txt = "${txt}"
         WHERE  id = 2     
    `;
    
    try {
        db.query(updateQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json({ result: true });
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("수정 할 수 없습니다.");
    };
})

router.get("/get2", (req, res, next) => {
    const selectQuery = `
        SELECT id,
               txt,
               imageURL
          FROM typeThree   
    `;
    try {
        db.query(selectQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json(rows[2]);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("데이터를 조회할 수 없습니다.");
    };
});


router.post("/update2", (req, res, next) => {
    const {txt} = req.body;

    const updateQuery = `
        UPDATE  typeThree
           SET  txt = "${txt}"
         WHERE  id = 3    
    `;
    
    try {
        db.query(updateQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json({ result: true });
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("수정 할 수 없습니다.");
    };
});

router.get("/get3", (req, res, next) => {
    const selectQuery = `
        SELECT id,
               txt,
               imageURL
          FROM typeThree   
    `;
    try {
        db.query(selectQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json(rows[3]);
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("데이터를 조회할 수 없습니다.");
    };
});


router.post("/update3", (req, res, next) => {
    const {txt} = req.body;

    const updateQuery = `
        UPDATE  typeThree
           SET  txt = "${txt}"
         WHERE  id = 4
    `;
    
    try {
        db.query(updateQuery, (error, rows) => {
            if(error) {
                throw error;
            }

            return res.status(200).json({ result: true });
        })
    } catch (error) {
        console.error(error);
        return res.status(400).send("수정 할 수 없습니다.");
    };
})


module.exports = router;