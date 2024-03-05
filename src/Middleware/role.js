const checkrole=(options)=>{
return (req,res,next)=>{
    const userrole=req.role;
    if(!userrole){
        return res.status(401).send("user role not provided");
    }
    const {permittedrole}=options;
    const isAllowed=permittedrole.include(userrole);
    if(!isAllowed)
    {
        return res.status(403).send("you do not have permission to perform this action ");
    }
    next();
}
}
module.exports={checkrole};