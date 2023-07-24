/**
 * 避免多次快速操作，产生无效的操作
 * @param delay
 * @param callback
 * @returns {(function(): void)|*}
 */
export declare function debounce(delay: number, callback: Function): () => void;
