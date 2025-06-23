import { useState } from "react";

function useSwitch(initialValue = false) {

    const [value, setValue] = useState(initialValue);

    const useToggle = () => setValue(prev => !prev);

    return [value, useToggle];
}

export default useSwitch;