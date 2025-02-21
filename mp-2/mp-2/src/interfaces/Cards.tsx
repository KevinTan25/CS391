export interface Cards {
    id: string;
    name: string;
    hp: number;
    types: string[];
    attacks: { name: string; cost: string[]; convertedEnergyCost: number; damage: string; text: string }[];
    weaknesses: { type: string; value: string }[];
    images: { small: string; large: string };
    rarity: string;
}
