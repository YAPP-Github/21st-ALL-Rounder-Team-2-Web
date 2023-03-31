import { useState, useCallback } from "react";

export function useSelect<T>(initialValue: T) {
  const [selectedItem, setSelectedItem] = useState(initialValue);

  const handleSelect = useCallback((item: T) => {
    setSelectedItem(item);
  }, []);

  return [selectedItem, handleSelect] as const;
}
