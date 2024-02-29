export type ciudad = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

export type usuario = {
    username: string;
    email: string;
    sex: string;
    address: string;
}  

export type perro = {
    image_link: string;
    name: string;
    max_height_male: number;
    max_height_female: number;
    max_weight_male: number;
    max_weight_female: number;
    good_with_strangers: number;
    good_with_children: number;
    good_with_other_dogs: number;
}