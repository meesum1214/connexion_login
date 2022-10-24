import { Arrow } from "../Icons";

export default ({children , onClick}) => {
    return (
        <div onClick={onClick} className="w-60 h-12 flex justify-between items-center text-sm font-semibold text-white bg-secondary rounded-full px-3 cursor-pointer hover:scale-105 transition-transform">
            <div className="text-secondary text-xs">s</div>
            <div className="tracking-wider">{children}</div>
            <Arrow />
        </div>
    )
}