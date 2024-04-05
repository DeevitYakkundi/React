export function DropMenu(){
    return(
        <div>
            <h1>Drop Menu</h1>
            <input type="text" name="name" placeholder="Enter Name" />
            <select name="city">
                <option value={""} id="">
                    Select City
                </option>
                <option value={"bengaulru"} id={"bengaulru"}>
                    Bengaluru
                </option>
                <option value={"mumbai"} id={"mumbai"}>
                    Mumbai
                </option>
            </select>

        </div>
    );
}