import { useState, useCallback } from "react";


export function useSelectCategory() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSelectCategory = useCallback((index: number) => {
        setSelectedIndex(index)
    }, [])

    return {
        selectedIndex,
        selectCategoryByIndex: handleSelectCategory
    }
}