
import React, { Component } from "react";
import './JetLagPage.css'
import AvTimerIcon from '@material-ui/icons/AvTimer';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Button } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

class JetLagPage extends Component {
  constructor() {
    super();
    this.state = {
      departureCity: "",
      arrivalCity: "",
      startShift: ""
    }
  }

  city_timezones = [
    [
      "Rio das Ostras, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Horad Barysaw, Belarus",
      "Europe/Minsk"
    ],
    [
      "Kangding, China",
      "Asia/Shanghai"
    ],
    [
      "Alamar, Cuba",
      "America/Havana"
    ],
    [
      "M'Sila, Algeria",
      "Africa/Algiers"
    ],
    [
      "Becontree, United Kingdom",
      "Europe/London"
    ],
    [
      "Yafo, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Airoli, India",
      "Asia/Kolkata"
    ],
    [
      "P'yongsong, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Tagiura, Libya",
      "Africa/Tripoli"
    ],
    [
      "Colonia Lindavista, Mexico",
      "America/Mexico_City"
    ],
    [
      "Subotica, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Tekstil'shchiki, Russia",
      "Europe/Moscow"
    ],
    [
      "Kamieniec Podolski, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Telde, Spain",
      "Atlantic/Canary"
    ],
    [
      "Punta Cana, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Worcester, United Kingdom",
      "Europe/London"
    ],
    [
      "Temecula, United States",
      "America/Los_Angeles"
    ],
    [
      "Trier, Germany",
      "Europe/Berlin"
    ],
    [
      "Phagwara, India",
      "Asia/Kolkata"
    ],
    [
      "Kalmunai, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Kuhdasht, Iran",
      "Asia/Tehran"
    ],
    [
      "Zonguldak, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Ust'-Ilimsk, Russia",
      "Asia/Irkutsk"
    ],
    [
      "Tiebo, Senegal",
      "Africa/Dakar"
    ],
    [
      "Magangue, Colombia",
      "America/Bogota"
    ],
    [
      "Linxi, China",
      "Asia/Shanghai"
    ],
    [
      "Lianjiang, China",
      "Asia/Urumqi"
    ],
    [
      "Chikushino-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Martinez de la Torre, Mexico",
      "America/Mexico_City"
    ],
    [
      "Centennial, United States",
      "America/Denver"
    ],
    [
      "Playa del Carmen, Mexico",
      "America/Cancun"
    ],
    [
      "Konan, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sakata, Japan",
      "Asia/Tokyo"
    ],
    [
      "Vasco Da Gama, India",
      "Asia/Kolkata"
    ],
    [
      "Qalyub, Egypt",
      "Africa/Cairo"
    ],
    [
      "Padangsidempuan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Itarsi, India",
      "Asia/Kolkata"
    ],
    [
      "Grogol, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bendigo, Australia",
      "Australia/Melbourne"
    ],
    [
      "Kallithea, Greece",
      "Europe/Athens"
    ],
    [
      "Narita, Japan",
      "Asia/Tokyo"
    ],
    [
      "Anyama, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Glazov, Russia",
      "Europe/Samara"
    ],
    [
      "Abu Kabir, Egypt",
      "Africa/Cairo"
    ],
    [
      "Nandurbar, India",
      "Asia/Kolkata"
    ],
    [
      "Itaguai, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Luofeng, China",
      "Asia/Shanghai"
    ],
    [
      "Jamalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Shahreza, Iran",
      "Asia/Tehran"
    ],
    [
      "El Progreso, Honduras",
      "America/Tegucigalpa"
    ],
    [
      "Solikamsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Oum el Bouaghi, Algeria",
      "Africa/Algiers"
    ],
    [
      "Funchal, Portugal",
      "Atlantic/Madeira"
    ],
    [
      "Navapolatsk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Elbasan, Albania",
      "Europe/Tirane"
    ],
    [
      "Coronel Fabriciano, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Guarapari, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Qinzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Ryazanskiy, Russia",
      "Europe/Moscow"
    ],
    [
      "Novyye Cheremushki, Russia",
      "Europe/Moscow"
    ],
    [
      "Cheremushki, Russia",
      "Europe/Moscow"
    ],
    [
      "Jolo, Philippines",
      "Asia/Manila"
    ],
    [
      "Ciudad Guzman, Mexico",
      "America/Mexico_City"
    ],
    [
      "Guaiba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mezhdurechensk, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Urdaneta, Philippines",
      "Asia/Manila"
    ],
    [
      "Udgir, India",
      "Asia/Kolkata"
    ],
    [
      "Mokopane, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Tartu, Estonia",
      "Europe/Tallinn"
    ],
    [
      "Vanadzor, Armenia",
      "Asia/Yerevan"
    ],
    [
      "Daly City, United States",
      "America/Los_Angeles"
    ],
    [
      "Tonghae, South Korea",
      "Asia/Seoul"
    ],
    [
      "Tokuyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "South Bend, United States",
      "America/Indiana/Indianapolis"
    ],
    [
      "Teofilo Otoni, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Gillingham, United Kingdom",
      "Europe/London"
    ],
    [
      "Colatina, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Lower Hutt, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Chakwal, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Medina Estates, Ghana",
      "Africa/Accra"
    ],
    [
      "Barretos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mirialguda, India",
      "Asia/Kolkata"
    ],
    [
      "Witten, Germany",
      "Europe/Berlin"
    ],
    [
      "Olomouc, Czech Republic",
      "Europe/Prague"
    ],
    [
      "Maladzyechna, Belarus",
      "Europe/Minsk"
    ],
    [
      "Jagadhri, India",
      "Asia/Kolkata"
    ],
    [
      "Dartmouth, Canada",
      "America/Halifax"
    ],
    [
      "Basildon, United Kingdom",
      "Europe/London"
    ],
    [
      "Seoni, India",
      "Asia/Kolkata"
    ],
    [
      "Mustafakemalpasa, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Argenteuil, France",
      "Europe/Paris"
    ],
    [
      "Kansk, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Malambo, Colombia",
      "America/Bogota"
    ],
    [
      "Temapache, Mexico",
      "America/Mexico_City"
    ],
    [
      "Assis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Szekesfehervar, Hungary",
      "Europe/Budapest"
    ],
    [
      "Salihorsk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Dera Ismail Khan, Pakistan",
      "Asia/Karachi"
    ],
    [
      "`Ibri, Oman",
      "Asia/Muscat"
    ],
    [
      "Parsabad, Iran",
      "Asia/Tehran"
    ],
    [
      "Delta, Canada",
      "America/Vancouver"
    ],
    [
      "Bontang, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Ternate, Indonesia",
      "Asia/Jayapura"
    ],
    [
      "Hidalgo del Parral, Mexico",
      "America/Chihuahua"
    ],
    [
      "Erie, United States",
      "America/New_York"
    ],
    [
      "Torrevieja, Spain",
      "Europe/Madrid"
    ],
    [
      "Gondal, India",
      "Asia/Kolkata"
    ],
    [
      "Singkawang, Indonesia",
      "Asia/Pontianak"
    ],
    [
      "Pulong Santa Cruz, Philippines",
      "Asia/Manila"
    ],
    [
      "Bethal, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Shchukino, Russia",
      "Europe/Moscow"
    ],
    [
      "Brateyevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Disuq, Egypt",
      "Africa/Cairo"
    ],
    [
      "Sabratah, Libya",
      "Africa/Tripoli"
    ],
    [
      "Laoag, Philippines",
      "Asia/Manila"
    ],
    [
      "Ferozepore, India",
      "Asia/Kolkata"
    ],
    [
      "Inazawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ukhta, Russia",
      "Europe/Moscow"
    ],
    [
      "Birigui, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Artem, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Qianzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Marmagao, India",
      "Asia/Kolkata"
    ],
    [
      "Drobeta-Turnu Severin, Romania",
      "Europe/Bucharest"
    ],
    [
      "Antioch, United States",
      "America/Los_Angeles"
    ],
    [
      "Tulancingo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Bemowo, Poland",
      "Europe/Warsaw"
    ],
    [
      "Shahzadpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Concepcion de La Vega, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Flint, United States",
      "America/Detroit"
    ],
    [
      "Curico, Chile",
      "America/Santiago"
    ],
    [
      "Wazirabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Dhaulpur, India",
      "Asia/Kolkata"
    ],
    [
      "Sagh, Chad",
      "Africa/Ndjamena"
    ],
    [
      "Lubango, Angola",
      "Africa/Luanda"
    ],
    [
      "Edison, United States",
      "America/New_York"
    ],
    [
      "St Helens, United Kingdom",
      "Europe/London"
    ],
    [
      "Chelmsford, United Kingdom",
      "Europe/London"
    ],
    [
      "Erlangen, Germany",
      "Europe/Berlin"
    ],
    [
      "Roxas City, Philippines",
      "Asia/Manila"
    ],
    [
      "Piatra Neamt, Romania",
      "Europe/Bucharest"
    ],
    [
      "Belawan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Lafiagi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Khushab, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Pushkino, Russia",
      "Europe/Moscow"
    ],
    [
      "Palma Soriano, Cuba",
      "America/Havana"
    ],
    [
      "Portmore, Jamaica",
      "America/Jamaica"
    ],
    [
      "Qurayyat, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Ciudad Delicias, Mexico",
      "America/Chihuahua"
    ],
    [
      "Bogorodskoye, Russia",
      "Europe/Moscow"
    ],
    [
      "Oleksandriya, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Rantauprapat, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Everett, United States",
      "America/Los_Angeles"
    ],
    [
      "Hildesheim, Germany",
      "Europe/Berlin"
    ],
    [
      "Ikere-Ekiti, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Begusarai, India",
      "Asia/Kolkata"
    ],
    [
      "Ghazipur, India",
      "Asia/Kolkata"
    ],
    [
      "Kashipur, India",
      "Asia/Kolkata"
    ],
    [
      "Velikiye Luki, Russia",
      "Europe/Moscow"
    ],
    [
      "Escuintla, Guatemala",
      "America/Guatemala"
    ],
    [
      "Palm Bay, United States",
      "America/New_York"
    ],
    [
      "Esmeraldas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Cheltenham, United Kingdom",
      "Europe/London"
    ],
    [
      "Turgutlu, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Akademicheskoe, Russia",
      "Europe/Moscow"
    ],
    [
      "Vinh Long, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Nishio, Japan",
      "Asia/Tokyo"
    ],
    [
      "Burbank, United States",
      "America/Los_Angeles"
    ],
    [
      "Queluz, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Isehara, Japan",
      "Asia/Tokyo"
    ],
    [
      "Las Margaritas, Mexico",
      "America/Mexico_City"
    ],
    [
      "Phitsanulok, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Heroica Guaymas, Mexico",
      "America/Hermosillo"
    ],
    [
      "Murrieta, United States",
      "America/Los_Angeles"
    ],
    [
      "Prabumulih, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Brandon, United States",
      "America/New_York"
    ],
    [
      "Nagda, India",
      "Asia/Kolkata"
    ],
    [
      "Churu, India",
      "Asia/Kolkata"
    ],
    [
      "Bilqas, Egypt",
      "Africa/Cairo"
    ],
    [
      "Zhanaozen, Kazakhstan",
      "Asia/Aqtau"
    ],
    [
      "Gardez, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Tantoyuca, Mexico",
      "America/Mexico_City"
    ],
    [
      "Male, Maldives",
      "Indian/Maldives"
    ],
    [
      "Richmond, United States",
      "America/Los_Angeles"
    ],
    [
      "West Jordan, United States",
      "America/Denver"
    ],
    [
      "Hosur, India",
      "Asia/Kolkata"
    ],
    [
      "Nkpor, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Marzahn, Germany",
      "Europe/Berlin"
    ],
    [
      "Yuxi, China",
      "Asia/Shanghai"
    ],
    [
      "Bagaha, India",
      "Asia/Kolkata"
    ],
    [
      "Dolisie, Republic of the Congo",
      "Africa/Brazzaville"
    ],
    [
      "Roorkee, India",
      "Asia/Kolkata"
    ],
    [
      "Woking, United Kingdom",
      "Europe/London"
    ],
    [
      "Ed Damer, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Enfield Town, United Kingdom",
      "Europe/London"
    ],
    [
      "Jishu, China",
      "Asia/Shanghai"
    ],
    [
      "Kroonstad, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Soyibug, India",
      "Asia/Kolkata"
    ],
    [
      "Izmaylovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Kiselevsk, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Iwakuni, Japan",
      "Asia/Tokyo"
    ],
    [
      "Abengourou, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Matamoros, Mexico",
      "America/Monterrey"
    ],
    [
      "Green Bay, United States",
      "America/Chicago"
    ],
    [
      "Yenakiyeve, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Wuchuan, China",
      "Asia/Urumqi"
    ],
    [
      "Billings, United States",
      "America/Denver"
    ],
    [
      "Kara, Togo",
      "Africa/Lome"
    ],
    [
      "Bishoftu, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Kot Addu, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Pulandian, China",
      "Asia/Shanghai"
    ],
    [
      "Lo Prado, Chile",
      "America/Santiago"
    ],
    [
      "Tandil, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Yatsushiro, Japan",
      "Asia/Tokyo"
    ],
    [
      "Zhezqazghan, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "High Point, United States",
      "America/New_York"
    ],
    [
      "Mostar, Bosnia and Herzegovina",
      "Europe/Sarajevo"
    ],
    [
      "Depok, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Wichita Falls, United States",
      "America/Chicago"
    ],
    [
      "Al Faw, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Badlapur, India",
      "Asia/Kolkata"
    ],
    [
      "Gera, Germany",
      "Europe/Berlin"
    ],
    [
      "Jena, Germany",
      "Europe/Berlin"
    ],
    [
      "Douliu, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Oldham, United Kingdom",
      "Europe/London"
    ],
    [
      "Baneh, Iran",
      "Asia/Tehran"
    ],
    [
      "Daxing, China",
      "Asia/Shanghai"
    ],
    [
      "Moratalaz, Spain",
      "Europe/Madrid"
    ],
    [
      "Malinovka, Belarus",
      "Europe/Minsk"
    ],
    [
      "Universal City, United States",
      "America/Los_Angeles"
    ],
    [
      "Barnala, India",
      "Asia/Kolkata"
    ],
    [
      "Araguaina, Brazil",
      "America/Araguaina"
    ],
    [
      "Linhares, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Cambridge, United States",
      "America/New_York"
    ],
    [
      "Jizan, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Yevpatoriya, Ukraine",
      "Europe/Simferopol"
    ],
    [
      "Thanh Pho Hoa Binh, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Queenstown, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Fairfield, United States",
      "America/Los_Angeles"
    ],
    [
      "Carlsbad, United States",
      "America/Los_Angeles"
    ],
    [
      "Nancy, France",
      "Europe/Paris"
    ],
    [
      "Baraki, Algeria",
      "Africa/Algiers"
    ],
    [
      "Tengzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Bhairab Bazar, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Mariara, Venezuela",
      "America/Caracas"
    ],
    [
      "Fresnillo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Tanza, Philippines",
      "Asia/Manila"
    ],
    [
      "Ponnani, India",
      "Asia/Kolkata"
    ],
    [
      "Fargo, United States",
      "America/Chicago"
    ],
    [
      "Norwalk, United States",
      "America/Los_Angeles"
    ],
    [
      "Gresham, United States",
      "America/Los_Angeles"
    ],
    [
      "Idku, Egypt",
      "Africa/Cairo"
    ],
    [
      "Lahad Datu, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Anqiu, China",
      "Asia/Shanghai"
    ],
    [
      "Nantou, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Azare, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Ain Beida, Algeria",
      "Africa/Algiers"
    ],
    [
      "Suceava, Romania",
      "Europe/Bucharest"
    ],
    [
      "Arjawinangun, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Guaratingueta, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mati, Philippines",
      "Asia/Manila"
    ],
    [
      "Khurja, India",
      "Asia/Kolkata"
    ],
    [
      "Xinghua, China",
      "Asia/Shanghai"
    ],
    [
      "Derbent, Russia",
      "Europe/Moscow"
    ],
    [
      "Sydney, Canada",
      "America/Glace_Bay"
    ],
    [
      "Ashqelon, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Legnica, Poland",
      "Europe/Warsaw"
    ],
    [
      "West Covina, United States",
      "America/Los_Angeles"
    ],
    [
      "Santa Cruz do Sul, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Westminster, United States",
      "America/Denver"
    ],
    [
      "Launceston, Australia",
      "Australia/Hobart"
    ],
    [
      "Blackburn, United Kingdom",
      "Europe/London"
    ],
    [
      "Bergisch Gladbach, Germany",
      "Europe/Berlin"
    ],
    [
      "Novotroitsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Gangawati, India",
      "Asia/Kolkata"
    ],
    [
      "Namur, Belgium",
      "Europe/Brussels"
    ],
    [
      "Pindiga, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Buhe, China",
      "Asia/Shanghai"
    ],
    [
      "Hwado, South Korea",
      "Asia/Seoul"
    ],
    [
      "Longjiang, China",
      "Asia/Shanghai"
    ],
    [
      "Arvada, United States",
      "America/Denver"
    ],
    [
      "Wilmington, United States",
      "America/New_York"
    ],
    [
      "Cikarang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Lowell, United States",
      "America/New_York"
    ],
    [
      "Coimbra, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Fukayacho, Japan",
      "Asia/Tokyo"
    ],
    [
      "Pueblo, United States",
      "America/Denver"
    ],
    [
      "Chittaurgarh, India",
      "Asia/Kolkata"
    ],
    [
      "Rayong, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Rochester, United States",
      "America/Chicago"
    ],
    [
      "Lianran, China",
      "Asia/Shanghai"
    ],
    [
      "Catia La Mar, Venezuela",
      "America/Caracas"
    ],
    [
      "Al Hawamidiyah, Egypt",
      "Africa/Cairo"
    ],
    [
      "Ejido, Venezuela",
      "America/Caracas"
    ],
    [
      "Taungoo, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Elista, Russia",
      "Europe/Moscow"
    ],
    [
      "Khemisset, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Sutton Coldfield, United Kingdom",
      "Europe/London"
    ],
    [
      "Mitrovice, Kosovo",
      "Europe/Belgrade"
    ],
    [
      "Crawley, United Kingdom",
      "Europe/London"
    ],
    [
      "Yen Vinh, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Apucarana, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ilebo, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Iida, Japan",
      "Asia/Tokyo"
    ],
    [
      "Reus, Spain",
      "Europe/Madrid"
    ],
    [
      "Vicenza, Italy",
      "Europe/Rome"
    ],
    [
      "As Suwayq, Oman",
      "Asia/Muscat"
    ],
    [
      "Bharatpur, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Miami Gardens, United States",
      "America/New_York"
    ],
    [
      "Vasteras, Sweden",
      "Europe/Stockholm"
    ],
    [
      "Siegen, Germany",
      "Europe/Berlin"
    ],
    [
      "Koblenz, Germany",
      "Europe/Berlin"
    ],
    [
      "Shinyanga, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Vitoria de Santo Antao, Brazil",
      "America/Recife"
    ],
    [
      "Obninsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Sherpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Poa, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Koszalin, Poland",
      "Europe/Warsaw"
    ],
    [
      "Araras, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Alcobendas, Spain",
      "Europe/Madrid"
    ],
    [
      "Ramnicu Valcea, Romania",
      "Europe/Bucharest"
    ],
    [
      "Shaping, China",
      "Asia/Shanghai"
    ],
    [
      "Butterworth, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Umm Qasr, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Bandirma, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Clearwater, United States",
      "America/New_York"
    ],
    [
      "Ji Parana, Brazil",
      "America/Porto_Velho"
    ],
    [
      "Ourense, Spain",
      "Europe/Madrid"
    ],
    [
      "Moers, Germany",
      "Europe/Berlin"
    ],
    [
      "Tajimi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jalai Nur, China",
      "Asia/Shanghai"
    ],
    [
      "Jalpaiguri, India",
      "Asia/Kolkata"
    ],
    [
      "Thanh pho Bac Lieu, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Jiangyin, China",
      "Asia/Shanghai"
    ],
    [
      "Atbara, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Kunshan, China",
      "Asia/Shanghai"
    ],
    [
      "An Nuhud, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Rockingham, Australia",
      "Australia/Perth"
    ],
    [
      "Santa Cruz, Philippines",
      "Asia/Manila"
    ],
    [
      "Pingliang, China",
      "Asia/Shanghai"
    ],
    [
      "Birnin Kebbi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Banyuwangi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Tadepallegudem, India",
      "Asia/Kolkata"
    ],
    [
      "Elgin, United States",
      "America/Chicago"
    ],
    [
      "Oktyabr'skiy, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Cabo Frio, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kyzyl, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Nehe, China",
      "Asia/Shanghai"
    ],
    [
      "Sohar, Oman",
      "Asia/Muscat"
    ],
    [
      "Dagenham, United Kingdom",
      "Europe/London"
    ],
    [
      "Santiago, Philippines",
      "Asia/Manila"
    ],
    [
      "Trincomalee, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Baghlan, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Mopti, Mali",
      "Africa/Bamako"
    ],
    [
      "Giron, Colombia",
      "America/Bogota"
    ],
    [
      "Bansbaria, India",
      "Asia/Kolkata"
    ],
    [
      "Enterprise, United States",
      "America/Los_Angeles"
    ],
    [
      "Columbia, United States",
      "America/Chicago"
    ],
    [
      "Katumba, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Madanapalle, India",
      "Asia/Kolkata"
    ],
    [
      "Dharan Bazar, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Uromi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Sawai Madhopur, India",
      "Asia/Kolkata"
    ],
    [
      "Pemba, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Ksar El Kebir, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Murfreesboro, United States",
      "America/Chicago"
    ],
    [
      "Kalisz, Poland",
      "Europe/Warsaw"
    ],
    [
      "Boulogne-Billancourt, France",
      "Europe/Paris"
    ],
    [
      "Dehui, China",
      "Asia/Shanghai"
    ],
    [
      "Iwatsuki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Franco da Rocha, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Zhongxiang, China",
      "Asia/Shanghai"
    ],
    [
      "Leninsk-Kuznetsky, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Komatsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Matagalpa, Nicaragua",
      "America/Managua"
    ],
    [
      "Hulan, China",
      "Asia/Shanghai"
    ],
    [
      "San Rafael, Argentina",
      "America/Argentina/Mendoza"
    ],
    [
      "Port-Gentil, Gabon",
      "Africa/Libreville"
    ],
    [
      "Livingstone, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Tumbes, Peru",
      "America/Lima"
    ],
    [
      "Sergiyev Posad, Russia",
      "Europe/Moscow"
    ],
    [
      "Ijebu-Igbo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Larache, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Hoshangabad, India",
      "Asia/Kolkata"
    ],
    [
      "Zhaotong, China",
      "Asia/Shanghai"
    ],
    [
      "Colchester, United Kingdom",
      "Europe/London"
    ],
    [
      "Heihe, China",
      "Asia/Shanghai"
    ],
    [
      "Phalaborwa, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Arzamas, Russia",
      "Europe/Moscow"
    ],
    [
      "Ciudad Valles, Mexico",
      "America/Mexico_City"
    ],
    [
      "Dongxing, China",
      "Asia/Shanghai"
    ],
    [
      "Manchester, United States",
      "America/New_York"
    ],
    [
      "Taitung City, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Catanduva, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Tieli, China",
      "Asia/Shanghai"
    ],
    [
      "Araruama, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Inglewood, United States",
      "America/Los_Angeles"
    ],
    [
      "Kandi, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Shilong, China",
      "Asia/Shanghai"
    ],
    [
      "Lichinga, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Seversk, Russia",
      "Asia/Novosibirsk"
    ],
    [
      "Kecskemet, Hungary",
      "Europe/Budapest"
    ],
    [
      "Ambur, India",
      "Asia/Kolkata"
    ],
    [
      "Hailun, China",
      "Asia/Shanghai"
    ],
    [
      "Linshui, China",
      "Asia/Shanghai"
    ],
    [
      "Costa Mesa, United States",
      "America/Los_Angeles"
    ],
    [
      "Bataysk, Russia",
      "Europe/Moscow"
    ],
    [
      "Mizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Zliten, Libya",
      "Africa/Tripoli"
    ],
    [
      "Mendip, United Kingdom",
      "Europe/London"
    ],
    [
      "Kufa, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Vacoas, Mauritius",
      "Indian/Mauritius"
    ],
    [
      "Ressano Garcia, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Noyabrsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Qingnian, China",
      "Asia/Shanghai"
    ],
    [
      "Gabes, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Garanhuns, Brazil",
      "America/Recife"
    ],
    [
      "Citeureup, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Nelspruit, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Bender, Moldova",
      "Europe/Chisinau"
    ],
    [
      "Kresek, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kiryu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tauranga, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Waterbury, United States",
      "America/New_York"
    ],
    [
      "Sultanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Delicias, Spain",
      "Europe/Madrid"
    ],
    [
      "Manzini, Swaziland",
      "Africa/Mbabane"
    ],
    [
      "Yenangyaung, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Caen, France",
      "Europe/Paris"
    ],
    [
      "East Independence, United States",
      "America/Chicago"
    ],
    [
      "Perpignan, France",
      "Europe/Paris"
    ],
    [
      "Zhuji, China",
      "Asia/Shanghai"
    ],
    [
      "Manzanillo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Hadejia, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Bandar-e Anzali, Iran",
      "Asia/Tehran"
    ],
    [
      "Turhal, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Encheng, China",
      "Asia/Shanghai"
    ],
    [
      "Hikone, Japan",
      "Asia/Tokyo"
    ],
    [
      "Norman, United States",
      "America/Chicago"
    ],
    [
      "Varzea Paulista, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Atibaia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Barsi, India",
      "Asia/Kolkata"
    ],
    [
      "Dongtai, China",
      "Asia/Shanghai"
    ],
    [
      "Nguru, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Nsukka, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Navadwip, India",
      "Asia/Kolkata"
    ],
    [
      "Midland, United States",
      "America/Chicago"
    ],
    [
      "Achalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Ciutat Vella, Spain",
      "Europe/Madrid"
    ],
    [
      "Araucaria, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mbouda, Cameroon",
      "Africa/Douala"
    ],
    [
      "Santa Rosa, Argentina",
      "America/Argentina/Salta"
    ],
    [
      "Mulhouse, France",
      "Europe/Paris"
    ],
    [
      "Magelang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Ashoknagar Kalyangarh, India",
      "Asia/Kolkata"
    ],
    [
      "Cileunyi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Masjed Soleyman, Iran",
      "Asia/Tehran"
    ],
    [
      "Resende, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Daugavpils, Latvia",
      "Europe/Riga"
    ],
    [
      "Chhatarpur, India",
      "Asia/Kolkata"
    ],
    [
      "Conselheiro Lafaiete, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Lysychans'k, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Bangaon, India",
      "Asia/Kolkata"
    ],
    [
      "Kandy, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Suriapet, India",
      "Asia/Kolkata"
    ],
    [
      "Quchan, Iran",
      "Asia/Tehran"
    ],
    [
      "Downey, United States",
      "America/Los_Angeles"
    ],
    [
      "Novokuybyshevsk, Russia",
      "Europe/Samara"
    ],
    [
      "Zwolle, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Iringa, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Douma, Syria",
      "Asia/Damascus"
    ],
    [
      "Ribeirao Pires, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ca Mau, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Beibei, China",
      "Asia/Shanghai"
    ],
    [
      "Furth, Germany",
      "Europe/Berlin"
    ],
    [
      "Esuk Oron, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Port Blair, India",
      "Asia/Kolkata"
    ],
    [
      "Rewari, India",
      "Asia/Kolkata"
    ],
    [
      "Carupano, Venezuela",
      "America/Caracas"
    ],
    [
      "Iguala de la Independencia, Mexico",
      "America/Mexico_City"
    ],
    [
      "Pudukkottai, India",
      "Asia/Kolkata"
    ],
    [
      "Mazyr, Belarus",
      "Europe/Minsk"
    ],
    [
      "Chas, India",
      "Asia/Kolkata"
    ],
    [
      "Mothihari, India",
      "Asia/Kolkata"
    ],
    [
      "Apopa, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Faridpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Guanare, Venezuela",
      "America/Caracas"
    ],
    [
      "Kamalia, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Kaiyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Innsbruck, Austria",
      "Europe/Vienna"
    ],
    [
      "Thanh Hoa, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Provo, United States",
      "America/Denver"
    ],
    [
      "Satu Mare, Romania",
      "Europe/Bucharest"
    ],
    [
      "Mojokerto, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Berkeley, United States",
      "America/Los_Angeles"
    ],
    [
      "Shaowu, China",
      "Asia/Shanghai"
    ],
    [
      "Reutlingen, Germany",
      "Europe/Berlin"
    ],
    [
      "Nefteyugansk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Chanduasi, India",
      "Asia/Kolkata"
    ],
    [
      "Haikou, China",
      "Asia/Shanghai"
    ],
    [
      "Rouen, France",
      "Europe/Paris"
    ],
    [
      "Satara, India",
      "Asia/Kolkata"
    ],
    [
      "Guangming, China",
      "Asia/Shanghai"
    ],
    [
      "Vihari, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Eastbourne, United Kingdom",
      "Europe/London"
    ],
    [
      "Guanabacoa, Cuba",
      "America/Havana"
    ],
    [
      "Alanya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Shchelkovo, Russia",
      "Europe/Moscow"
    ],
    [
      "North Peoria, United States",
      "America/Chicago"
    ],
    [
      "Exeter, United Kingdom",
      "Europe/London"
    ],
    [
      "Kitami, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jhunjhunun, India",
      "Asia/Kolkata"
    ],
    [
      "Praia, Cape Verde",
      "Atlantic/Cape_Verde"
    ],
    [
      "Luanshya, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Denton, United States",
      "America/Chicago"
    ],
    [
      "Chorzow, Poland",
      "Europe/Warsaw"
    ],
    [
      "El Monte, United States",
      "America/Los_Angeles"
    ],
    [
      "Mishima, Japan",
      "Asia/Tokyo"
    ],
    [
      "Nippes, Germany",
      "Europe/Berlin"
    ],
    [
      "Budapest XIII. keruelet, Hungary",
      "Europe/Budapest"
    ],
    [
      "Dumaguete, Philippines",
      "Asia/Manila"
    ],
    [
      "Jandira, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Maba, China",
      "Asia/Shanghai"
    ],
    [
      "Qianguo, China",
      "Asia/Shanghai"
    ],
    [
      "Cuito, Angola",
      "Africa/Luanda"
    ],
    [
      "Pingshan, China",
      "Asia/Shanghai"
    ],
    [
      "Wardha, India",
      "Asia/Kolkata"
    ],
    [
      "Tobol'sk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Offa, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Maler Kotla, India",
      "Asia/Kolkata"
    ],
    [
      "Botucatu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Laghouat, Algeria",
      "Africa/Algiers"
    ],
    [
      "Ann Arbor, United States",
      "America/Detroit"
    ],
    [
      "Villa Lugano, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Hotan, China",
      "Asia/Shanghai"
    ],
    [
      "Ochakovo-Matveyevskoye, Russia",
      "Europe/Moscow"
    ],
    [
      "Kankan, Guinea",
      "Africa/Conakry"
    ],
    [
      "Erzincan, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Siirt, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Dharmavaram, India",
      "Asia/Kolkata"
    ],
    [
      "Sawangan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bergamo, Italy",
      "Europe/Rome"
    ],
    [
      "Yuyao, China",
      "Asia/Shanghai"
    ],
    [
      "Kingston, Canada",
      "America/Toronto"
    ],
    [
      "Pleiku, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Pamanukan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Lansing, United States",
      "America/Detroit"
    ],
    [
      "Balasore, India",
      "Asia/Kolkata"
    ],
    [
      "Dunedin, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Soc Trang, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Coquitlam, Canada",
      "America/Vancouver"
    ],
    [
      "Mary, Turkmenistan",
      "Asia/Ashgabat"
    ],
    [
      "Botosani, Romania",
      "Europe/Bucharest"
    ],
    [
      "Mingshui, China",
      "Asia/Shanghai"
    ],
    [
      "Balkh, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Peoria, United States",
      "America/Chicago"
    ],
    [
      "Tuguegarao City, Philippines",
      "Asia/Manila"
    ],
    [
      "Basti, India",
      "Asia/Kolkata"
    ],
    [
      "Pouso Alegre, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bizerte, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Toliara, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Tianfu, China",
      "Asia/Shanghai"
    ],
    [
      "Texcoco de Mora, Mexico",
      "America/Mexico_City"
    ],
    [
      "Lengshuijiang, China",
      "Asia/Shanghai"
    ],
    [
      "Okigwe, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Baidyabati, India",
      "Asia/Kolkata"
    ],
    [
      "Novo-Peredelkino, Russia",
      "Europe/Moscow"
    ],
    [
      "Batang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Parla, Spain",
      "Europe/Madrid"
    ],
    [
      "Yelets, Russia",
      "Europe/Moscow"
    ],
    [
      "Guelph, Canada",
      "America/Toronto"
    ],
    [
      "Sri Jayewardenepura Kotte, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Zoetermeer, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Binzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Milpa Alta, Mexico",
      "America/Mexico_City"
    ],
    [
      "Victorville, United States",
      "America/Los_Angeles"
    ],
    [
      "Cavite City, Philippines",
      "Asia/Manila"
    ],
    [
      "Pavlohrad, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Vallejo, United States",
      "America/Los_Angeles"
    ],
    [
      "Ras al-Khaimah, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Schoneberg Bezirk, Germany",
      "Europe/Berlin"
    ],
    [
      "Noginsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Taganskiy, Russia",
      "Europe/Moscow"
    ],
    [
      "Alchevs'k, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Sinop, Brazil",
      "America/Cuiaba"
    ],
    [
      "Handa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Digos, Philippines",
      "Asia/Manila"
    ],
    [
      "Gudivada, India",
      "Asia/Kolkata"
    ],
    [
      "Algeciras, Spain",
      "Europe/Madrid"
    ],
    [
      "Cherkessk, Russia",
      "Europe/Moscow"
    ],
    [
      "Springfield, United States",
      "America/Chicago"
    ],
    [
      "Yakeshi, China",
      "Asia/Shanghai"
    ],
    [
      "Berlin Schoeneberg, Germany",
      "Europe/Berlin"
    ],
    [
      "Nyiregyhaza, Hungary",
      "Europe/Budapest"
    ],
    [
      "Dasha, China",
      "Asia/Shanghai"
    ],
    [
      "Yelahanka, India",
      "Asia/Kolkata"
    ],
    [
      "Santa Clara, United States",
      "America/Los_Angeles"
    ],
    [
      "Moncloa-Aravaca, Spain",
      "Europe/Madrid"
    ],
    [
      "Puno, Peru",
      "America/Lima"
    ],
    [
      "Jaen, Spain",
      "Europe/Madrid"
    ],
    [
      "Taldykorgan, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Varginha, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ahmadpur East, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Pescara, Italy",
      "Europe/Rome"
    ],
    [
      "Azamgarh, India",
      "Asia/Kolkata"
    ],
    [
      "Simoes Filho, Brazil",
      "America/Bahia"
    ],
    [
      "Brugge, Belgium",
      "Europe/Brussels"
    ],
    [
      "Athens, United States",
      "America/New_York"
    ],
    [
      "Lausanne, Switzerland",
      "Europe/Zurich"
    ],
    [
      "Ordu, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Independence, United States",
      "America/Chicago"
    ],
    [
      "Hofu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Frisco, United States",
      "America/Chicago"
    ],
    [
      "Pinhais, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Khenchela, Algeria",
      "Africa/Algiers"
    ],
    [
      "Rishra, India",
      "Asia/Kolkata"
    ],
    [
      "Botad, India",
      "Asia/Kolkata"
    ],
    [
      "Qingzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Kindia, Guinea",
      "Africa/Conakry"
    ],
    [
      "Nkongsamba, Cameroon",
      "Africa/Douala"
    ],
    [
      "Abilene, United States",
      "America/Chicago"
    ],
    [
      "Cacak, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Setubal, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Remscheid, Germany",
      "Europe/Berlin"
    ],
    [
      "Calabozo, Venezuela",
      "America/Caracas"
    ],
    [
      "Khanna, India",
      "Asia/Kolkata"
    ],
    [
      "Longjing, China",
      "Asia/Shanghai"
    ],
    [
      "Ishinomaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kedungwuni, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Pyin Oo Lwin, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Newport, United Kingdom",
      "Europe/London"
    ],
    [
      "Panevezys, Lithuania",
      "Europe/Vilnius"
    ],
    [
      "Evansville, United States",
      "America/Chicago"
    ],
    [
      "Punta Arenas, Chile",
      "America/Santiago"
    ],
    [
      "Bremerhaven, Germany",
      "Europe/Berlin"
    ],
    [
      "Tunja, Colombia",
      "America/Bogota"
    ],
    [
      "Tigwav, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Surprise, United States",
      "America/Phoenix"
    ],
    [
      "Tebingtinggi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Anaco, Venezuela",
      "America/Caracas"
    ],
    [
      "Ciudad de Villa de Alvarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Ikoma, Japan",
      "Asia/Tokyo"
    ],
    [
      "Rotherham, United Kingdom",
      "Europe/London"
    ],
    [
      "Shunyi, China",
      "Asia/Shanghai"
    ],
    [
      "Achinsk, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Gemena, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Jalingo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Loja, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Tarnow, Poland",
      "Europe/Warsaw"
    ],
    [
      "Sokode, Togo",
      "Africa/Lome"
    ],
    [
      "Friedrichshain Bezirk, Germany",
      "Europe/Berlin"
    ],
    [
      "Patan, India",
      "Asia/Kolkata"
    ],
    [
      "Uzhhorod, Ukraine",
      "Europe/Uzhgorod"
    ],
    [
      "Nakhon Pathom, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Troparevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Buga, Colombia",
      "America/Bogota"
    ],
    [
      "Morbi, India",
      "Asia/Kolkata"
    ],
    [
      "Puning, China",
      "Asia/Shanghai"
    ],
    [
      "Allentown, United States",
      "America/New_York"
    ],
    [
      "Jetpur, India",
      "Asia/Kolkata"
    ],
    [
      "Ilobu, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Bama, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Torrejon de Ardoz, Spain",
      "Europe/Madrid"
    ],
    [
      "San Juan del Rio, Mexico",
      "America/Mexico_City"
    ],
    [
      "Pita Kotte, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Bandundu, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Uppal Kalan, India",
      "Asia/Kolkata"
    ],
    [
      "Malindi, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Berdyans'k, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Beaumont, United States",
      "America/Chicago"
    ],
    [
      "Chicacole, India",
      "Asia/Kolkata"
    ],
    [
      "Maseru, Lesotho",
      "Africa/Maseru"
    ],
    [
      "Cubatao, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Zielona Gora, Poland",
      "Europe/Warsaw"
    ],
    [
      "Sepatan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Adilabad, India",
      "Asia/Kolkata"
    ],
    [
      "Khlong Luang, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Zacatecas, Mexico",
      "America/Mexico_City"
    ],
    [
      "Rimini, Italy",
      "Europe/Rome"
    ],
    [
      "Pleven, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Kokubunji, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ain Oussera, Algeria",
      "Africa/Algiers"
    ],
    [
      "Lhasa, China",
      "Asia/Urumqi"
    ],
    [
      "Shimotoda, Japan",
      "Asia/Tokyo"
    ],
    [
      "Thornton, United States",
      "America/Denver"
    ],
    [
      "Damoh, India",
      "Asia/Kolkata"
    ],
    [
      "Roseville, United States",
      "America/Los_Angeles"
    ],
    [
      "San Jose, Philippines",
      "Asia/Manila"
    ],
    [
      "Reykjavik, Iceland",
      "Atlantic/Reykjavik"
    ],
    [
      "Cagua, Venezuela",
      "America/Caracas"
    ],
    [
      "Settat, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Carrollton, United States",
      "America/Chicago"
    ],
    [
      "Siwan, India",
      "Asia/Kolkata"
    ],
    [
      "Offenbach, Germany",
      "Europe/Berlin"
    ],
    [
      "Jau, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Dordrecht, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Toledo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Pforzheim, Germany",
      "Europe/Berlin"
    ],
    [
      "Lira, Uganda",
      "Africa/Kampala"
    ],
    [
      "Nazilli, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Quevedo, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Silang, Philippines",
      "Asia/Manila"
    ],
    [
      "Modakeke, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Monza, Italy",
      "Europe/Rome"
    ],
    [
      "Bergedorf, Germany",
      "Europe/Berlin"
    ],
    [
      "Trois-Rivieres, Canada",
      "America/Toronto"
    ],
    [
      "Leiden, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Santa Coloma de Gramenet, Spain",
      "Europe/Madrid"
    ],
    [
      "Jaranwala, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Kairouan, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Charlottenburg Bezirk, Germany",
      "Europe/Berlin"
    ],
    [
      "Maxixe, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Santa Rita, Brazil",
      "America/Fortaleza"
    ],
    [
      "Bottrop, Germany",
      "Europe/Berlin"
    ],
    [
      "Novoye Medvezhino, Belarus",
      "Europe/Minsk"
    ],
    [
      "Bangil, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Nabatiye et Tahta, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Navojoa, Mexico",
      "America/Hermosillo"
    ],
    [
      "Abbottabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Solntsevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Orekhovo-Zuyevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Midoun, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Charleston, United States",
      "America/New_York"
    ],
    [
      "Gracia, Spain",
      "Europe/Madrid"
    ],
    [
      "Gangapur, India",
      "Asia/Kolkata"
    ],
    [
      "Perugia, Italy",
      "Europe/Rome"
    ],
    [
      "Budapest XIV. keruelet, Hungary",
      "Europe/Budapest"
    ],
    [
      "Fernando de la Mora, Paraguay",
      "America/Asuncion"
    ],
    [
      "Wloclawek, Poland",
      "Europe/Warsaw"
    ],
    [
      "Cambridge, Canada",
      "America/Toronto"
    ],
    [
      "Karaman, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Rawang, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Ulm, Germany",
      "Europe/Berlin"
    ],
    [
      "Mufulira, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Fengcheng, China",
      "Asia/Shanghai"
    ],
    [
      "Toyokawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Lafayette, United States",
      "America/Chicago"
    ],
    [
      "Ingolstadt, Germany",
      "Europe/Berlin"
    ],
    [
      "Heilbronn, Germany",
      "Europe/Berlin"
    ],
    [
      "Nakhon Si Thammarat, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Guntakal Junction, India",
      "Asia/Kolkata"
    ],
    [
      "Xilin Hot, China",
      "Asia/Shanghai"
    ],
    [
      "Zyuzino, Russia",
      "Europe/Moscow"
    ],
    [
      "Tobruk, Libya",
      "Africa/Tripoli"
    ],
    [
      "Yaizu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Cachoeirinha, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Coral Springs, United States",
      "America/New_York"
    ],
    [
      "Musoma, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Olmaliq, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "North Stamford, United States",
      "America/New_York"
    ],
    [
      "Raigarh, India",
      "Asia/Kolkata"
    ],
    [
      "Orizaba, Mexico",
      "America/Mexico_City"
    ],
    [
      "Lianhe, China",
      "Asia/Shanghai"
    ],
    [
      "Braga, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Noda, Japan",
      "Asia/Tokyo"
    ],
    [
      "San Juan, Philippines",
      "Asia/Manila"
    ],
    [
      "Ekibastuz, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Naucalpan de Juarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Chikmagalur, India",
      "Asia/Kolkata"
    ],
    [
      "Fujinomiya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Payakumbuh, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Vejalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Stavanger, Norway",
      "Europe/Oslo"
    ],
    [
      "Bern, Switzerland",
      "Europe/Zurich"
    ],
    [
      "Bhadreswar, India",
      "Asia/Kolkata"
    ],
    [
      "Mataro, Spain",
      "Europe/Madrid"
    ],
    [
      "Batumi, Georgia",
      "Asia/Tbilisi"
    ],
    [
      "Nalgonda, India",
      "Asia/Kolkata"
    ],
    [
      "Nobeoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Palwal, India",
      "Asia/Kolkata"
    ],
    [
      "Zabol, Iran",
      "Asia/Tehran"
    ],
    [
      "Veshnyaki, Russia",
      "Europe/Moscow"
    ],
    [
      "Presnenskiy, Russia",
      "Europe/Moscow"
    ],
    [
      "San Pedro Garza Garcia, Mexico",
      "America/Monterrey"
    ],
    [
      "Durres, Albania",
      "Europe/Tirane"
    ],
    [
      "Miramar, United States",
      "America/New_York"
    ],
    [
      "Concord, United States",
      "America/Los_Angeles"
    ],
    [
      "Goettingen, Germany",
      "Europe/Berlin"
    ],
    [
      "Dibrugarh, India",
      "Asia/Kolkata"
    ],
    [
      "Villa Canales, Guatemala",
      "America/Guatemala"
    ],
    [
      "Chishtian Mandi, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Barbacena, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Aalborg, Denmark",
      "Europe/Copenhagen"
    ],
    [
      "Tekirdag, Turkey",
      "Europe/Istanbul"
    ],
    [
      "My Tho, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Bellevue, United States",
      "America/Los_Angeles"
    ],
    [
      "Amherst, United States",
      "America/New_York"
    ],
    [
      "Maastricht, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Jiayuguan, China",
      "Asia/Shanghai"
    ],
    [
      "Zhoucun, China",
      "Asia/Shanghai"
    ],
    [
      "Xiulin, China",
      "Asia/Shanghai"
    ],
    [
      "Palhoca, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Recklinghausen, Germany",
      "Europe/Berlin"
    ],
    [
      "Beylikduezue, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Brits, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Virginia, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Kisarazu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Puruliya, India",
      "Asia/Kolkata"
    ],
    [
      "Ubon Ratchathani, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Huangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Hardoi, India",
      "Asia/Kolkata"
    ],
    [
      "Stamford, United States",
      "America/New_York"
    ],
    [
      "Az Zubayr, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Alagoinhas, Brazil",
      "America/Bahia"
    ],
    [
      "Dam Dam, India",
      "Asia/Kolkata"
    ],
    [
      "Pati, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Dos Hermanas, Spain",
      "Europe/Madrid"
    ],
    [
      "Tsaritsyno, Russia",
      "Europe/Moscow"
    ],
    [
      "Minzhu, China",
      "Asia/Shanghai"
    ],
    [
      "Niihama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Wolfsburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Luoyang, China",
      "Asia/Shanghai"
    ],
    [
      "Porto Seguro, Brazil",
      "America/Bahia"
    ],
    [
      "Gagnoa, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Bordj el Kiffan, Algeria",
      "Africa/Algiers"
    ],
    [
      "Epworth, Zimbabwe",
      "Africa/Harare"
    ],
    [
      "Indramayu, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Palanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Ban Rangsit, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Uruguaiana, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mohali, India",
      "Asia/Kolkata"
    ],
    [
      "Hagonoy, Philippines",
      "Asia/Manila"
    ],
    [
      "Guelma, Algeria",
      "Africa/Algiers"
    ],
    [
      "Lumajang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Ciamis, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Potchefstroom, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Budapest III. keruelet, Hungary",
      "Europe/Budapest"
    ],
    [
      "Thaton, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Polokwane, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Salvaleon de Higuey, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Baoshan, China",
      "Asia/Shanghai"
    ],
    [
      "Darjiling, India",
      "Asia/Kolkata"
    ],
    [
      "Jiupu, China",
      "Asia/Shanghai"
    ],
    [
      "Metz, France",
      "Europe/Paris"
    ],
    [
      "Teresopolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Rudnyy, Kazakhstan",
      "Asia/Qyzylorda"
    ],
    [
      "Rustenburg, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Laiwu, China",
      "Asia/Shanghai"
    ],
    [
      "Orleans, France",
      "Europe/Paris"
    ],
    [
      "Rajapalaiyam, India",
      "Asia/Kolkata"
    ],
    [
      "Marand, Iran",
      "Asia/Tehran"
    ],
    [
      "Sao Jose dos Pinhais, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Simi Valley, United States",
      "America/Los_Angeles"
    ],
    [
      "Lecheng, China",
      "Asia/Shanghai"
    ],
    [
      "Targowek, Poland",
      "Europe/Warsaw"
    ],
    [
      "Agadez, Niger",
      "Africa/Niamey"
    ],
    [
      "Gainesville, United States",
      "America/New_York"
    ],
    [
      "Timon, Brazil",
      "America/Fortaleza"
    ],
    [
      "Gorzow Wielkopolski, Poland",
      "Europe/Warsaw"
    ],
    [
      "Visalia, United States",
      "America/Los_Angeles"
    ],
    [
      "Kokshetau, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Riobamba, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Kashihara-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Khairpur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Santa Tecla, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Yushu, China",
      "Asia/Shanghai"
    ],
    [
      "San Francisco de Macoris, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Hartford, United States",
      "America/New_York"
    ],
    [
      "Sloviansk, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Waco, United States",
      "America/Chicago"
    ],
    [
      "Semnan, Iran",
      "Asia/Tehran"
    ],
    [
      "Huixquilucan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Gondia, India",
      "Asia/Kolkata"
    ],
    [
      "Zamora, Mexico",
      "America/Mexico_City"
    ],
    [
      "Suining, China",
      "Asia/Shanghai"
    ],
    [
      "Padalarang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Elizabeth, United States",
      "America/New_York"
    ],
    [
      "Mandsaur, India",
      "Asia/Kolkata"
    ],
    [
      "Willemstad, Cura\u00e7ao",
      "America/Curacao"
    ],
    [
      "Balti, Moldova",
      "Europe/Chisinau"
    ],
    [
      "Tyoply Stan, Russia",
      "Europe/Moscow"
    ],
    [
      "Beppu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Bohicon, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Braganca Paulista, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kelowna, Canada",
      "America/Vancouver"
    ],
    [
      "Shahecheng, China",
      "Asia/Shanghai"
    ],
    [
      "Orsha, Belarus",
      "Europe/Minsk"
    ],
    [
      "Haimen, China",
      "Asia/Shanghai"
    ],
    [
      "Los Angeles, Chile",
      "America/Santiago"
    ],
    [
      "Okinawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Koronadal, Philippines",
      "Asia/Manila"
    ],
    [
      "Sorong, Indonesia",
      "Asia/Jayapura"
    ],
    [
      "Ajlun, Jordan",
      "Asia/Amman"
    ],
    [
      "Tando Adam, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Torbat-e Heydariyeh, Iran",
      "Asia/Tehran"
    ],
    [
      "Xiazhen, China",
      "Asia/Shanghai"
    ],
    [
      "Watford, United Kingdom",
      "Europe/London"
    ],
    [
      "Salerno, Italy",
      "Europe/Rome"
    ],
    [
      "Les Cayes, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Navoiy, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Gashua, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Olathe, United States",
      "America/Chicago"
    ],
    [
      "Huicheng, China",
      "Asia/Shanghai"
    ],
    [
      "Pangkalpinang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Retiro, Spain",
      "Europe/Madrid"
    ],
    [
      "Paseh, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Patos de Minas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Itapetininga, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Rafah, Palestinian Territory",
      "Asia/Gaza"
    ],
    [
      "Cedar Rapids, United States",
      "America/Chicago"
    ],
    [
      "Macheng, China",
      "Asia/Shanghai"
    ],
    [
      "Lambare, Paraguay",
      "America/Asuncion"
    ],
    [
      "Al Jadid, Libya",
      "Africa/Tripoli"
    ],
    [
      "Chinandega, Nicaragua",
      "America/Managua"
    ],
    [
      "Levis, Canada",
      "America/Blanc-Sablon"
    ],
    [
      "Kolar, India",
      "Asia/Kolkata"
    ],
    [
      "Songea, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Anmore, Canada",
      "America/Vancouver"
    ],
    [
      "Jombang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Edirne, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Lalitpur, India",
      "Asia/Kolkata"
    ],
    [
      "East Los Angeles, United States",
      "America/Los_Angeles"
    ],
    [
      "Sogamoso, Colombia",
      "America/Bogota"
    ],
    [
      "Ueda, Japan",
      "Asia/Tokyo"
    ],
    [
      "Bahawalnagar, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Thousand Oaks, United States",
      "America/Los_Angeles"
    ],
    [
      "Bahawalnagar, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Danshui, China",
      "Asia/Shanghai"
    ],
    [
      "Pakpattan, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Cadiz, Spain",
      "Europe/Madrid"
    ],
    [
      "Xichang, China",
      "Asia/Shanghai"
    ],
    [
      "Villaverde, Spain",
      "Europe/Madrid"
    ],
    [
      "Neftekamsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Khasavyurt, Russia",
      "Europe/Moscow"
    ],
    [
      "Klaten, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Hathras, India",
      "Asia/Kolkata"
    ],
    [
      "Rangkasbitung, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Daska, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Murom, Russia",
      "Europe/Moscow"
    ],
    [
      "Pakokku, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Angren, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Bettiah, India",
      "Asia/Kolkata"
    ],
    [
      "Cuddapah, India",
      "Asia/Kolkata"
    ],
    [
      "Sancti Spiritus, Cuba",
      "America/Havana"
    ],
    [
      "Isiro, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Tipitapa, Nicaragua",
      "America/Managua"
    ],
    [
      "Surat Thani, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Tando Allahyar, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Jiangyou, China",
      "Asia/Shanghai"
    ],
    [
      "Colima, Mexico",
      "America/Mexico_City"
    ],
    [
      "Lafia, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Amaigbo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Huaihua, China",
      "Asia/Shanghai"
    ],
    [
      "Xai-Xai, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Wau, South Sudan",
      "Africa/Juba"
    ],
    [
      "Walbrzych, Poland",
      "Europe/Warsaw"
    ],
    [
      "Topeka, United States",
      "America/Chicago"
    ],
    [
      "Plock, Poland",
      "Europe/Warsaw"
    ],
    [
      "Jequie, Brazil",
      "America/Bahia"
    ],
    [
      "Sirajganj, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Saida, Algeria",
      "Africa/Algiers"
    ],
    [
      "Elblag, Poland",
      "Europe/Warsaw"
    ],
    [
      "Worcester, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Opole, Poland",
      "Europe/Warsaw"
    ],
    [
      "Kusatsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Uppsala, Sweden",
      "Europe/Stockholm"
    ],
    [
      "San Nicolas de los Arroyos, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Titagarh, India",
      "Asia/Kolkata"
    ],
    [
      "Xuanzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Ungaran, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Divo, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Muar, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Killeen, United States",
      "America/Chicago"
    ],
    [
      "Orekhovo-Borisovo Severnoye, Russia",
      "Europe/Moscow"
    ],
    [
      "Ivanovskoye, Russia",
      "Europe/Moscow"
    ],
    [
      "Panvel, India",
      "Asia/Kolkata"
    ],
    [
      "Asaka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ramat Gan, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Sirte, Libya",
      "Africa/Tripoli"
    ],
    [
      "Serpukhov, Russia",
      "Europe/Moscow"
    ],
    [
      "Halisahar, India",
      "Asia/Kolkata"
    ],
    [
      "Yavatmal, India",
      "Asia/Kolkata"
    ],
    [
      "Manzanillo, Cuba",
      "America/Havana"
    ],
    [
      "Jirja, Egypt",
      "Africa/Cairo"
    ],
    [
      "Gyor, Hungary",
      "Europe/Budapest"
    ],
    [
      "Teluknaga, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Al Manaqil, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Jima, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Sakakah, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Khardah, India",
      "Asia/Kolkata"
    ],
    [
      "El Eulma, Algeria",
      "Africa/Algiers"
    ],
    [
      "Besancon, France",
      "Europe/Paris"
    ],
    [
      "Novocheboksarsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Cambridge, United Kingdom",
      "Europe/London"
    ],
    [
      "Hassan, India",
      "Asia/Kolkata"
    ],
    [
      "Oulu, Finland",
      "Europe/Helsinki"
    ],
    [
      "Kamyshin, Russia",
      "Europe/Volgograd"
    ],
    [
      "Gloucester, United Kingdom",
      "Europe/London"
    ],
    [
      "Sinah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Idlib, Syria",
      "Asia/Damascus"
    ],
    [
      "Arish, Egypt",
      "Africa/Cairo"
    ],
    [
      "Mogi-Gaucu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Palo Negro, Venezuela",
      "America/Caracas"
    ],
    [
      "Satkhira, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Bat Yam, Israel",
      "Asia/Jerusalem"
    ],
    [
      "San Cristobal de las Casas, Mexico",
      "America/Mexico_City"
    ],
    [
      "Zyablikovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Cadiz, Philippines",
      "Asia/Manila"
    ],
    [
      "Darwin, Australia",
      "Australia/Darwin"
    ],
    [
      "Udipi, India",
      "Asia/Kolkata"
    ],
    [
      "Leiyang, China",
      "Asia/Shanghai"
    ],
    [
      "Mino, Japan",
      "Asia/Tokyo"
    ],
    [
      "Regensburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Shahr-e Kord, Iran",
      "Asia/Tehran"
    ],
    [
      "Charallave, Venezuela",
      "America/Caracas"
    ],
    [
      "Bilbays, Egypt",
      "Africa/Cairo"
    ],
    [
      "Nador, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Columbia, United States",
      "America/New_York"
    ],
    [
      "Palopo, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Copiapo, Chile",
      "America/Santiago"
    ],
    [
      "Tete, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Andong, South Korea",
      "Asia/Seoul"
    ],
    [
      "Acilia-Castel Fusano-Ostia Antica, Italy",
      "Europe/Rome"
    ],
    [
      "Ouargla, Algeria",
      "Africa/Algiers"
    ],
    [
      "Sherbrooke, Canada",
      "America/Toronto"
    ],
    [
      "West Valley City, United States",
      "America/Denver"
    ],
    [
      "Daitocho, Japan",
      "Asia/Tokyo"
    ],
    [
      "Deoria, India",
      "Asia/Kolkata"
    ],
    [
      "Bimbo, Central African Republic",
      "Africa/Bangui"
    ],
    [
      "Sterling Heights, United States",
      "America/Detroit"
    ],
    [
      "Tokat, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Navoiy, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Mandi Bahauddin, Pakistan",
      "Asia/Karachi"
    ],
    [
      "New Haven, United States",
      "America/New_York"
    ],
    [
      "Baidoa, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "McAllen, United States",
      "America/Chicago"
    ],
    [
      "Gyeongsan-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Kisaran, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Wuda, China",
      "Asia/Shanghai"
    ],
    [
      "Dehri, India",
      "Asia/Kolkata"
    ],
    [
      "Shangri-La, China",
      "Asia/Shanghai"
    ],
    [
      "Mostaganem, Algeria",
      "Africa/Algiers"
    ],
    [
      "Sabha, Libya",
      "Africa/Tripoli"
    ],
    [
      "Tychy, Poland",
      "Europe/Warsaw"
    ],
    [
      "Ramenki, Russia",
      "Europe/Moscow"
    ],
    [
      "Syevyerodonets'k, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Manzanillo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Relizane, Algeria",
      "Africa/Algiers"
    ],
    [
      "Masaya, Nicaragua",
      "America/Managua"
    ],
    [
      "Sinnar, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Jaragua do Sul, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Songjiang, China",
      "Asia/Shanghai"
    ],
    [
      "La Ceiba, Honduras",
      "America/Tegucigalpa"
    ],
    [
      "Quilpue, Chile",
      "America/Santiago"
    ],
    [
      "Girardot City, Colombia",
      "America/Bogota"
    ],
    [
      "Jiazi, China",
      "Asia/Shanghai"
    ],
    [
      "Nablus, Palestinian Territory",
      "Asia/Hebron"
    ],
    [
      "Florencia, Colombia",
      "America/Bogota"
    ],
    [
      "Maicao, Colombia",
      "America/Bogota"
    ],
    [
      "Dongyang, China",
      "Asia/Shanghai"
    ],
    [
      "Petrogradka, Russia",
      "Europe/Moscow"
    ],
    [
      "Nikopol', Ukraine",
      "Europe/Kiev"
    ],
    [
      "Moga, India",
      "Asia/Kolkata"
    ],
    [
      "Siauliai, Lithuania",
      "Europe/Vilnius"
    ],
    [
      "Dabrowa Gornicza, Poland",
      "Europe/Warsaw"
    ],
    [
      "Abohar, India",
      "Asia/Kolkata"
    ],
    [
      "Garza Garcia, Mexico",
      "America/Monterrey"
    ],
    [
      "Isesaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Shuangcheng, China",
      "Asia/Shanghai"
    ],
    [
      "Al Bab, Syria",
      "Asia/Damascus"
    ],
    [
      "Dazhou, China",
      "Asia/Shanghai"
    ],
    [
      "Pinsk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Beawar, India",
      "Asia/Kolkata"
    ],
    [
      "Matsubara, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sapucaia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Buzau, Romania",
      "Europe/Bucharest"
    ],
    [
      "Novomoskovsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Miyakonojo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Pilibhit, India",
      "Asia/Kolkata"
    ],
    [
      "Lashio, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "McKinney, United States",
      "America/Chicago"
    ],
    [
      "Iranshahr, Iran",
      "Asia/Tehran"
    ],
    [
      "Hepo, China",
      "Asia/Shanghai"
    ],
    [
      "Toowoomba, Australia",
      "Australia/Brisbane"
    ],
    [
      "Raniganj, India",
      "Asia/Kolkata"
    ],
    [
      "Gonbad-e Kavus, Iran",
      "Asia/Tehran"
    ],
    [
      "Villeurbanne, France",
      "Europe/Paris"
    ],
    [
      "Martapura, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Majie, China",
      "Asia/Shanghai"
    ],
    [
      "Kadoma, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kishangarh, India",
      "Asia/Kolkata"
    ],
    [
      "Abiko, Japan",
      "Asia/Tokyo"
    ],
    [
      "Punto Fijo, Venezuela",
      "America/Caracas"
    ],
    [
      "Bulaon, Philippines",
      "Asia/Manila"
    ],
    [
      "Dawukou, China",
      "Asia/Shanghai"
    ],
    [
      "Shahrud, Iran",
      "Asia/Tehran"
    ],
    [
      "Godhra, India",
      "Asia/Kolkata"
    ],
    [
      "Omuta, Japan",
      "Asia/Tokyo"
    ],
    [
      "St. Catharines, Canada",
      "America/Toronto"
    ],
    [
      "Muricay, Philippines",
      "Asia/Manila"
    ],
    [
      "Pindamonhangaba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Zalantun, China",
      "Asia/Shanghai"
    ],
    [
      "Dimitrovgrad, Russia",
      "Europe/Moscow"
    ],
    [
      "Quetzaltenango, Guatemala",
      "America/Guatemala"
    ],
    [
      "Kakamigahara, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tlemcen, Algeria",
      "Africa/Algiers"
    ],
    [
      "Cerro, Cuba",
      "America/Havana"
    ],
    [
      "Blitar, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Ankang, China",
      "Asia/Shanghai"
    ],
    [
      "Nzerekore, Guinea",
      "Africa/Conakry"
    ],
    [
      "Palakkad, India",
      "Asia/Kolkata"
    ],
    [
      "Hoofddorp, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Kislovodsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Miandoab, Iran",
      "Asia/Tehran"
    ],
    [
      "Shillong, India",
      "Asia/Kolkata"
    ],
    [
      "Sandacho, Japan",
      "Asia/Tokyo"
    ],
    [
      "Fujieda, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tondabayashicho, Japan",
      "Asia/Tokyo"
    ],
    [
      "Puqi, China",
      "Asia/Shanghai"
    ],
    [
      "Clarksville, United States",
      "America/Chicago"
    ],
    [
      "Ibarra, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Idfu, Egypt",
      "Africa/Cairo"
    ],
    [
      "Hawassa, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Talisay, Philippines",
      "Asia/Manila"
    ],
    [
      "Birganj, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Okrika, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Reggio nell'Emilia, Italy",
      "Europe/Rome"
    ],
    [
      "Hindupur, India",
      "Asia/Kolkata"
    ],
    [
      "Valdivia, Chile",
      "America/Santiago"
    ],
    [
      "Bhuj, India",
      "Asia/Kolkata"
    ],
    [
      "Marg`ilon, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Gonda City, India",
      "Asia/Kolkata"
    ],
    [
      "Pervoural'sk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Hajipur, India",
      "Asia/Kolkata"
    ],
    [
      "Randfontein, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Wuerzburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Singaraja, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Thanh Pho Thai Nguyen, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Ebetsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Inegol, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Bankura, India",
      "Asia/Kolkata"
    ],
    [
      "Dali, China",
      "Asia/Shanghai"
    ],
    [
      "Warren, United States",
      "America/Detroit"
    ],
    [
      "Slough, United Kingdom",
      "Europe/London"
    ],
    [
      "Abakaliki, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Adiwerna, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Leogane, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Ikirun, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Seto, Japan",
      "Asia/Tokyo"
    ],
    [
      "Leon, Spain",
      "Europe/Madrid"
    ],
    [
      "Srodmiescie, Poland",
      "Europe/Warsaw"
    ],
    [
      "San Mateo, Philippines",
      "Asia/Manila"
    ],
    [
      "Nevinnomyssk, Russia",
      "Europe/Moscow"
    ],
    [
      "Ajdabiya, Libya",
      "Africa/Tripoli"
    ],
    [
      "Tuxpan de Rodriguez Cano, Mexico",
      "America/Mexico_City"
    ],
    [
      "Cordoba, Mexico",
      "America/Mexico_City"
    ],
    [
      "Chetumal, Mexico",
      "America/Cancun"
    ],
    [
      "Rodriguez, Philippines",
      "Asia/Manila"
    ],
    [
      "s-Hertogenbosch, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Marbella, Spain",
      "Europe/Madrid"
    ],
    [
      "Zama, Japan",
      "Asia/Tokyo"
    ],
    [
      "El Oued, Algeria",
      "Africa/Algiers"
    ],
    [
      "Baturaja, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Okap, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Cartago, Colombia",
      "America/Bogota"
    ],
    [
      "Mandya, India",
      "Asia/Kolkata"
    ],
    [
      "Chhindwara, India",
      "Asia/Kolkata"
    ],
    [
      "Bielany, Poland",
      "Europe/Warsaw"
    ],
    [
      "Jayapura, Indonesia",
      "Asia/Jayapura"
    ],
    [
      "Hanam, South Korea",
      "Asia/Seoul"
    ],
    [
      "Hinthada, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Cajamarca, Peru",
      "America/Lima"
    ],
    [
      "Fullerton, United States",
      "America/Los_Angeles"
    ],
    [
      "Moundou, Chad",
      "Africa/Ndjamena"
    ],
    [
      "Tyre, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Robertsonpet, India",
      "Asia/Kolkata"
    ],
    [
      "Cary, United States",
      "America/New_York"
    ],
    [
      "Rabak, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Shiqiao, China",
      "Asia/Shanghai"
    ],
    [
      "Pyay, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Buguma, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Cam Pha Mines, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "West Bromwich, United Kingdom",
      "Europe/London"
    ],
    [
      "Baliuag, Philippines",
      "Asia/Manila"
    ],
    [
      "Kindu, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Kushtia, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Queimados, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jagdaqi, China",
      "Asia/Shanghai"
    ],
    [
      "Osorno, Chile",
      "America/Santiago"
    ],
    [
      "Tasek Glugor, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Dimapur, India",
      "Asia/Kolkata"
    ],
    [
      "Lleida, Spain",
      "Europe/Madrid"
    ],
    [
      "Perovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Dese, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Gejiu, China",
      "Asia/Shanghai"
    ],
    [
      "Mahbubnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Savannah, United States",
      "America/New_York"
    ],
    [
      "Orange, United States",
      "America/Los_Angeles"
    ],
    [
      "Van Nuys, United States",
      "America/Los_Angeles"
    ],
    [
      "Sao Caetano do Sul, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Podgorica, Montenegro",
      "Europe/Podgorica"
    ],
    [
      "Kabankalan, Philippines",
      "Asia/Manila"
    ],
    [
      "Baia Mare, Romania",
      "Europe/Bucharest"
    ],
    [
      "Shizuishan, China",
      "Asia/Shanghai"
    ],
    [
      "Apeldoorn, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Igboho, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Dawei, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Funtua, Nigeria",
      "Africa/Lagos"
    ],
    [
      "San Juan Sacatepequez, Guatemala",
      "America/Guatemala"
    ],
    [
      "Kanchrapara, India",
      "Asia/Kolkata"
    ],
    [
      "Foggia, Italy",
      "Europe/Rome"
    ],
    [
      "Odintsovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Hami, China",
      "Asia/Urumqi"
    ],
    [
      "Jiashan, China",
      "Asia/Shanghai"
    ],
    [
      "Pasadena, United States",
      "America/Los_Angeles"
    ],
    [
      "Irakleion, Greece",
      "Europe/Athens"
    ],
    [
      "Saint-Denis, Reunion",
      "Indian/Reunion"
    ],
    [
      "Negombo, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Bhisho, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Bitung, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Castanhal, Brazil",
      "America/Belem"
    ],
    [
      "Hampton, United States",
      "America/New_York"
    ],
    [
      "Jieshi, China",
      "Asia/Shanghai"
    ],
    [
      "Musashino, Japan",
      "Asia/Tokyo"
    ],
    [
      "Dikirnis, Egypt",
      "Africa/Cairo"
    ],
    [
      "Itu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Obuasi, Ghana",
      "Africa/Accra"
    ],
    [
      "Jacmel, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Baia Mare, Romania",
      "Europe/Bucharest"
    ],
    [
      "Parnaiba, Brazil",
      "America/Fortaleza"
    ],
    [
      "Anand, India",
      "Asia/Kolkata"
    ],
    [
      "Telford, United Kingdom",
      "Europe/London"
    ],
    [
      "Tiruvannamalai, India",
      "Asia/Kolkata"
    ],
    [
      "Thanesar, India",
      "Asia/Kolkata"
    ],
    [
      "Ejigbo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Chaohu, China",
      "Asia/Shanghai"
    ],
    [
      "Metairie, United States",
      "America/Chicago"
    ],
    [
      "Chitradurga, India",
      "Asia/Kolkata"
    ],
    [
      "Salamanca, Mexico",
      "America/Mexico_City"
    ],
    [
      "Sa Pa, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Clermont-Ferrand, France",
      "Europe/Paris"
    ],
    [
      "Fuyu, China",
      "Asia/Shanghai"
    ],
    [
      "Sekondi-Takoradi, Ghana",
      "Africa/Accra"
    ],
    [
      "Porbandar, India",
      "Asia/Kolkata"
    ],
    [
      "Kolpino, Russia",
      "Europe/Moscow"
    ],
    [
      "Brighton, United Kingdom",
      "Europe/London"
    ],
    [
      "Weru, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Huadian, China",
      "Asia/Shanghai"
    ],
    [
      "Budapest XI. keruelet, Hungary",
      "Europe/Budapest"
    ],
    [
      "Stockport, United Kingdom",
      "Europe/London"
    ],
    [
      "Choloma, Honduras",
      "America/Tegucigalpa"
    ],
    [
      "Kariya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sabah as Salim, Kuwait",
      "Asia/Kuwait"
    ],
    [
      "Sidoarjo, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "San Luis Rio Colorado, Mexico",
      "America/Hermosillo"
    ],
    [
      "Kumbakonam, India",
      "Asia/Kolkata"
    ],
    [
      "Habra, India",
      "Asia/Kolkata"
    ],
    [
      "Man, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Altay, China",
      "Asia/Urumqi"
    ],
    [
      "Siem Reap, Cambodia",
      "Asia/Phnom_Penh"
    ],
    [
      "Gbongan, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Haldwani, India",
      "Asia/Kolkata"
    ],
    [
      "Gojra, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Dadu, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Korolev, Russia",
      "Europe/Moscow"
    ],
    [
      "Mesquite, United States",
      "America/Chicago"
    ],
    [
      "Amersfoort, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Alexandria, United States",
      "America/New_York"
    ],
    [
      "Peristeri, Greece",
      "Europe/Athens"
    ],
    [
      "Shanhaiguan, China",
      "Asia/Shanghai"
    ],
    [
      "Tutamandahostel, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Chamartin, Spain",
      "Europe/Madrid"
    ],
    [
      "Sarria-Sant Gervasi, Spain",
      "Europe/Madrid"
    ],
    [
      "Parepare, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Ayacucho, Peru",
      "America/Lima"
    ],
    [
      "Vidisha, India",
      "Asia/Kolkata"
    ],
    [
      "Hazaribag, India",
      "Asia/Kolkata"
    ],
    [
      "Sunnyvale, United States",
      "America/Los_Angeles"
    ],
    [
      "Zaanstad, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Mpumalanga, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Peterborough, United Kingdom",
      "Europe/London"
    ],
    [
      "Lakhimpur, India",
      "Asia/Kolkata"
    ],
    [
      "Tarragona, Spain",
      "Europe/Madrid"
    ],
    [
      "Darmstadt, Germany",
      "Europe/Berlin"
    ],
    [
      "Tirmiz, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Al'met'yevsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Kaithal, India",
      "Asia/Kolkata"
    ],
    [
      "Los Teques, Venezuela",
      "America/Caracas"
    ],
    [
      "Nigel, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Hollywood, United States",
      "America/New_York"
    ],
    [
      "Norilsk, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Kampung Sungai Ara, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Comodoro Rivadavia, Argentina",
      "America/Argentina/Catamarca"
    ],
    [
      "Gongzhuling, China",
      "Asia/Shanghai"
    ],
    [
      "Ilam, Iran",
      "Asia/Tehran"
    ],
    [
      "Ghazni, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Paranagua, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Rijeka, Croatia",
      "Europe/Zagreb"
    ],
    [
      "Limoges, France",
      "Europe/Paris"
    ],
    [
      "Usera, Spain",
      "Europe/Madrid"
    ],
    [
      "Potosi, Bolivia",
      "America/La_Paz"
    ],
    [
      "Lauro de Freitas, Brazil",
      "America/Bahia"
    ],
    [
      "Ciudad del Carmen, Mexico",
      "America/Merida"
    ],
    [
      "Bolton, United Kingdom",
      "Europe/London"
    ],
    [
      "Yonago, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ibirite, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Balurghat, India",
      "Asia/Kolkata"
    ],
    [
      "Petapa, Guatemala",
      "America/Guatemala"
    ],
    [
      "Dayton, United States",
      "America/New_York"
    ],
    [
      "Tours, France",
      "Europe/Paris"
    ],
    [
      "Zheleznodorozhnyy, Russia",
      "Europe/Moscow"
    ],
    [
      "Arnhem, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Myingyan, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "eMbalenhle, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Naperville, United States",
      "America/Chicago"
    ],
    [
      "Taza, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Yuen Long Kau Hui, Hong Kong",
      "Asia/Hong_Kong"
    ],
    [
      "Jieshou, China",
      "Asia/Shanghai"
    ],
    [
      "Chertanovo Yuzhnoye, Russia",
      "Europe/Moscow"
    ],
    [
      "Ciego de Avila, Cuba",
      "America/Havana"
    ],
    [
      "Kimberley, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Paderborn, Germany",
      "Europe/Berlin"
    ],
    [
      "Jinhua, China",
      "Asia/Shanghai"
    ],
    [
      "Nawabganj, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Khanpur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Tuzla, Bosnia and Herzegovina",
      "Europe/Sarajevo"
    ],
    [
      "Metairie Terrace, United States",
      "America/Chicago"
    ],
    [
      "Mallawi, Egypt",
      "Africa/Cairo"
    ],
    [
      "Tanjungbalai, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Rybnik, Poland",
      "Europe/Warsaw"
    ],
    [
      "Sant Andreu de Palomar, Spain",
      "Europe/Madrid"
    ],
    [
      "Khimki, Russia",
      "Europe/Moscow"
    ],
    [
      "Middlesbrough, United Kingdom",
      "Europe/London"
    ],
    [
      "Pyatigorsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Bhimavaram, India",
      "Asia/Kolkata"
    ],
    [
      "Lakewood, United States",
      "America/Denver"
    ],
    [
      "Novyye Kuz'minki, Russia",
      "Europe/Moscow"
    ],
    [
      "Kuz'minki, Russia",
      "Europe/Moscow"
    ],
    [
      "Cape Coast, Ghana",
      "Africa/Accra"
    ],
    [
      "Macae, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Calama, Chile",
      "America/Santiago"
    ],
    [
      "Amiens, France",
      "Europe/Paris"
    ],
    [
      "Blackpool, United Kingdom",
      "Europe/London"
    ],
    [
      "Cabo, Brazil",
      "America/Recife"
    ],
    [
      "Kenema, Sierra Leone",
      "Africa/Freetown"
    ],
    [
      "Heidelberg, Germany",
      "Europe/Berlin"
    ],
    [
      "Bechar, Algeria",
      "Africa/Algiers"
    ],
    [
      "Stara Zagora, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Luziania, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Marawi City, Philippines",
      "Asia/Manila"
    ],
    [
      "Saguenay, Canada",
      "America/Toronto"
    ],
    [
      "Acarigua, Venezuela",
      "America/Caracas"
    ],
    [
      "Urayasu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Dumai, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Ipswich, United Kingdom",
      "Europe/London"
    ],
    [
      "Otaru, Japan",
      "Asia/Tokyo"
    ],
    [
      "Escondido, United States",
      "America/Los_Angeles"
    ],
    [
      "Kafr ash Shaykh, Egypt",
      "Africa/Cairo"
    ],
    [
      "Fort Collins, United States",
      "America/Denver"
    ],
    [
      "Wola, Poland",
      "Europe/Warsaw"
    ],
    [
      "Tizi Ouzou, Algeria",
      "Africa/Algiers"
    ],
    [
      "Biryulevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Orekhovo-Borisovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Teshi Old Town, Ghana",
      "Africa/Accra"
    ],
    [
      "Goma, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Hayward, United States",
      "America/Los_Angeles"
    ],
    [
      "Gorontalo, Indonesia",
      "Asia/Makassar"
    ],
    [
      "York, United Kingdom",
      "Europe/London"
    ],
    [
      "Meizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Bridgeport, United States",
      "America/New_York"
    ],
    [
      "Jinchang, China",
      "Asia/Shanghai"
    ],
    [
      "Elektrostal', Russia",
      "Europe/Moscow"
    ],
    [
      "Kumba, Cameroon",
      "Africa/Douala"
    ],
    [
      "Le Mans, France",
      "Europe/Paris"
    ],
    [
      "Leon, Nicaragua",
      "America/Managua"
    ],
    [
      "Larisa, Greece",
      "Europe/Athens"
    ],
    [
      "Acheng, China",
      "Asia/Shanghai"
    ],
    [
      "Ciudad Acuna, Mexico",
      "America/Matamoros"
    ],
    [
      "Sanya, China",
      "Asia/Shanghai"
    ],
    [
      "Sikasso, Mali",
      "Africa/Bamako"
    ],
    [
      "Khujand, Tajikistan",
      "Asia/Dushanbe"
    ],
    [
      "Brest, France",
      "Europe/Paris"
    ],
    [
      "Spanish Town, Jamaica",
      "America/Jamaica"
    ],
    [
      "Syracuse, United States",
      "America/New_York"
    ],
    [
      "Concordia, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Potsdam, Germany",
      "Europe/Berlin"
    ],
    [
      "Tabora, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Torrance, United States",
      "America/Los_Angeles"
    ],
    [
      "Taishan, China",
      "Asia/Shanghai"
    ],
    [
      "Batala, India",
      "Asia/Kolkata"
    ],
    [
      "Yamaguchi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Cikampek, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kampung Pasir Gudang Baru, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Saharsa, India",
      "Asia/Kolkata"
    ],
    [
      "Kansas City, United States",
      "America/Chicago"
    ],
    [
      "Orkney, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Maraba, Brazil",
      "America/Belem"
    ],
    [
      "Xinji, China",
      "Asia/Shanghai"
    ],
    [
      "Krishnanagar, India",
      "Asia/Kolkata"
    ],
    [
      "Odense, Denmark",
      "Europe/Copenhagen"
    ],
    [
      "Chamberi, Spain",
      "Europe/Madrid"
    ],
    [
      "Hanzhong, China",
      "Asia/Shanghai"
    ],
    [
      "Boise, United States",
      "America/Boise"
    ],
    [
      "Puerto Plata, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Qujing, China",
      "Asia/Shanghai"
    ],
    [
      "Gweru, Zimbabwe",
      "Africa/Harare"
    ],
    [
      "Afyonkarahisar, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Cuautla Morelos, Mexico",
      "America/Mexico_City"
    ],
    [
      "Ruda Slaska, Poland",
      "Europe/Warsaw"
    ],
    [
      "Paterson, United States",
      "America/New_York"
    ],
    [
      "Parma, Italy",
      "Europe/Rome"
    ],
    [
      "Pocos de Caldas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Saint-Quentin-en-Yvelines, France",
      "Europe/Paris"
    ],
    [
      "Matanzas, Cuba",
      "America/Havana"
    ],
    [
      "Cam Ranh, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Ambala, India",
      "Asia/Kolkata"
    ],
    [
      "Aix-en-Provence, France",
      "Europe/Paris"
    ],
    [
      "Gulu, Uganda",
      "Africa/Kampala"
    ],
    [
      "Targu-Mures, Romania",
      "Europe/Bucharest"
    ],
    [
      "Nakhodka, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Kalemie, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Buon Ma Thuot, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Manama, Bahrain",
      "Asia/Bahrain"
    ],
    [
      "Trondheim, Norway",
      "Europe/Oslo"
    ],
    [
      "Erode, India",
      "Asia/Kolkata"
    ],
    [
      "Nilopolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Joliet, United States",
      "America/Chicago"
    ],
    [
      "Aktau, Kazakhstan",
      "Asia/Aqtau"
    ],
    [
      "Kragujevac, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Bezirk Kreuzberg, Germany",
      "Europe/Berlin"
    ],
    [
      "El Jadida, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Khon Kaen, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Haarlem, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "As Salimiyah, Kuwait",
      "Asia/Kuwait"
    ],
    [
      "Mestre, Italy",
      "Europe/Rome"
    ],
    [
      "Ursynow, Poland",
      "Europe/Warsaw"
    ],
    [
      "Rafsanjan, Iran",
      "Asia/Tehran"
    ],
    [
      "Kolomna, Russia",
      "Europe/Moscow"
    ],
    [
      "Medea, Algeria",
      "Africa/Algiers"
    ],
    [
      "Salamanca, Spain",
      "Europe/Madrid"
    ],
    [
      "Huanuco, Peru",
      "America/Lima"
    ],
    [
      "Honggang, China",
      "Asia/Shanghai"
    ],
    [
      "East Hampton, United States",
      "America/New_York"
    ],
    [
      "Jijel, Algeria",
      "Africa/Algiers"
    ],
    [
      "Astanajapura, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Thanh Pho Ha Long, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Caxias, Brazil",
      "America/Fortaleza"
    ],
    [
      "Sujiatun, China",
      "Asia/Shanghai"
    ],
    [
      "Palangkaraya, Indonesia",
      "Asia/Pontianak"
    ],
    [
      "Barakpur, India",
      "Asia/Kolkata"
    ],
    [
      "Nimes, France",
      "Europe/Paris"
    ],
    [
      "Lubuklinggau, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "El Limon, Venezuela",
      "America/Caracas"
    ],
    [
      "Badajoz, Spain",
      "Europe/Madrid"
    ],
    [
      "Moriguchi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Chizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Gyumri, Armenia",
      "Asia/Yerevan"
    ],
    [
      "Valencia, United States",
      "America/Los_Angeles"
    ],
    [
      "Yulin, China",
      "Asia/Shanghai"
    ],
    [
      "Ar'ar, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Chingola, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Arganzuela, Spain",
      "Europe/Madrid"
    ],
    [
      "Huelva, Spain",
      "Europe/Madrid"
    ],
    [
      "Dunhua, China",
      "Asia/Shanghai"
    ],
    [
      "Prenzlauer Berg Bezirk, Germany",
      "Europe/Berlin"
    ],
    [
      "Huddersfield, United Kingdom",
      "Europe/London"
    ],
    [
      "Pasadena, United States",
      "America/Chicago"
    ],
    [
      "Pomona, United States",
      "America/Los_Angeles"
    ],
    [
      "Cagliari, Italy",
      "Europe/Rome"
    ],
    [
      "Ome, Japan",
      "Asia/Tokyo"
    ],
    [
      "Metro, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "City Center, Spain",
      "Europe/Madrid"
    ],
    [
      "Dijon, France",
      "Europe/Paris"
    ],
    [
      "Shantipur, India",
      "Asia/Kolkata"
    ],
    [
      "Mascara, Algeria",
      "Africa/Algiers"
    ],
    [
      "Malkajgiri, India",
      "Asia/Kolkata"
    ],
    [
      "Gimcheon, South Korea",
      "Asia/Seoul"
    ],
    [
      "Zhulebino, Russia",
      "Europe/Moscow"
    ],
    [
      "Dili, East Timor",
      "Asia/Dili"
    ],
    [
      "Mossel Bay, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Vryheid, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Poole, United Kingdom",
      "Europe/London"
    ],
    [
      "Balashikha, Russia",
      "Europe/Moscow"
    ],
    [
      "Urganch, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Kiziltepe, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Piedras Negras, Mexico",
      "America/Matamoros"
    ],
    [
      "Purwodadi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bago City, Philippines",
      "Asia/Manila"
    ],
    [
      "Salzburg, Austria",
      "Europe/Vienna"
    ],
    [
      "Parnamirim, Brazil",
      "America/Fortaleza"
    ],
    [
      "Virar, India",
      "Asia/Kolkata"
    ],
    [
      "Chillan, Chile",
      "America/Santiago"
    ],
    [
      "Salinas, United States",
      "America/Los_Angeles"
    ],
    [
      "Battambang, Cambodia",
      "Asia/Phnom_Penh"
    ],
    [
      "Huangyan, China",
      "Asia/Shanghai"
    ],
    [
      "Serilingampalle, India",
      "Asia/Kolkata"
    ],
    [
      "Higashimurayama-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ogaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "La Laguna, Spain",
      "Atlantic/Canary"
    ],
    [
      "Loudi, China",
      "Asia/Shanghai"
    ],
    [
      "Raj-Nandgaon, India",
      "Asia/Kolkata"
    ],
    [
      "Gaomi, China",
      "Asia/Shanghai"
    ],
    [
      "Guarapuava, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Minatitlan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Soreang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "El Tigre, Venezuela",
      "America/Caracas"
    ],
    [
      "Komaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Benguela, Angola",
      "Africa/Luanda"
    ],
    [
      "Saqqez, Iran",
      "Asia/Tehran"
    ],
    [
      "Qingyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Tonk, India",
      "Asia/Kolkata"
    ],
    [
      "Kohat, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Dundee, United Kingdom",
      "Europe/London"
    ],
    [
      "Itapecerica da Serra, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bintulu, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Cholula, Mexico",
      "America/Mexico_City"
    ],
    [
      "Abbotsford, Canada",
      "America/Vancouver"
    ],
    [
      "Guacara, Venezuela",
      "America/Caracas"
    ],
    [
      "Sibiu, Romania",
      "Europe/Bucharest"
    ],
    [
      "Bao Loc, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Strogino, Russia",
      "Europe/Moscow"
    ],
    [
      "Morena, India",
      "Asia/Kolkata"
    ],
    [
      "Longfeng, China",
      "Asia/Shanghai"
    ],
    [
      "Ota, Japan",
      "Asia/Tokyo"
    ],
    [
      "Logrono, Spain",
      "Europe/Madrid"
    ],
    [
      "Yichun, China",
      "Asia/Shanghai"
    ],
    [
      "Deyang, China",
      "Asia/Shanghai"
    ],
    [
      "Kerch, Ukraine",
      "Europe/Simferopol"
    ],
    [
      "Can Giuoc, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Aksaray, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Banda, India",
      "Asia/Kolkata"
    ],
    [
      "Corona, United States",
      "America/Los_Angeles"
    ],
    [
      "Silchar, India",
      "Asia/Kolkata"
    ],
    [
      "Songnim, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Chenghua, China",
      "Asia/Shanghai"
    ],
    [
      "Neuss, Germany",
      "Europe/Berlin"
    ],
    [
      "Baqubah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Weihai, China",
      "Asia/Shanghai"
    ],
    [
      "Ponce, Puerto Rico",
      "America/Puerto_Rico"
    ],
    [
      "Hamilton, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Jizzax, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Palmdale, United States",
      "America/Los_Angeles"
    ],
    [
      "Usak, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Rockford, United States",
      "America/Chicago"
    ],
    [
      "As Samawah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Rondonopolis, Brazil",
      "America/Cuiaba"
    ],
    [
      "Dingzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Linhai, China",
      "Asia/Shanghai"
    ],
    [
      "Dinapore, India",
      "Asia/Kolkata"
    ],
    [
      "Elk Grove, United States",
      "America/Los_Angeles"
    ],
    [
      "Fyzabad, India",
      "Asia/Kolkata"
    ],
    [
      "Springfield, United States",
      "America/New_York"
    ],
    [
      "Cairns, Australia",
      "Australia/Brisbane"
    ],
    [
      "Chincha Alta, Peru",
      "America/Lima"
    ],
    [
      "Medinipur, India",
      "Asia/Kolkata"
    ],
    [
      "Nova Friburgo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bharuch, India",
      "Asia/Kolkata"
    ],
    [
      "Yangchun, China",
      "Asia/Shanghai"
    ],
    [
      "Boshan, China",
      "Asia/Shanghai"
    ],
    [
      "Bahadurgarh, India",
      "Asia/Kolkata"
    ],
    [
      "Angra dos Reis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Enschede, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Hafizabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Guna, India",
      "Asia/Kolkata"
    ],
    [
      "Sanshui, China",
      "Asia/Shanghai"
    ],
    [
      "Rio Cuarto, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Livorno, Italy",
      "Europe/Rome"
    ],
    [
      "Alandur, India",
      "Asia/Kolkata"
    ],
    [
      "Sioux Falls, United States",
      "America/Chicago"
    ],
    [
      "Gondar, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Limassol, Cyprus",
      "Asia/Nicosia"
    ],
    [
      "Xinzhou, China",
      "Asia/Shanghai"
    ],
    [
      "East Chattanooga, United States",
      "America/New_York"
    ],
    [
      "San Cristobal, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Peoria, United States",
      "America/Phoenix"
    ],
    [
      "Tottori, Japan",
      "Asia/Tokyo"
    ],
    [
      "Viransehir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Kovrov, Russia",
      "Europe/Moscow"
    ],
    [
      "Pasarkemis, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Djelfa, Algeria",
      "Africa/Algiers"
    ],
    [
      "Cape Coral, United States",
      "America/New_York"
    ],
    [
      "Ambato, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Bene Beraq, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Zhaodong, China",
      "Asia/Shanghai"
    ],
    [
      "Gandajika, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Leshan, China",
      "Asia/Shanghai"
    ],
    [
      "La Serena, Chile",
      "America/Santiago"
    ],
    [
      "Oxford, United Kingdom",
      "Europe/London"
    ],
    [
      "Butembo, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Salem, United States",
      "America/Los_Angeles"
    ],
    [
      "Lyubertsy, Russia",
      "Europe/Moscow"
    ],
    [
      "Mahajanga, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Middelburg, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Pembroke Pines, United States",
      "America/New_York"
    ],
    [
      "Guangshui, China",
      "Asia/Shanghai"
    ],
    [
      "Beipiao, China",
      "Asia/Shanghai"
    ],
    [
      "Lianghu, China",
      "Asia/Shanghai"
    ],
    [
      "Tetuan de las Victorias, Spain",
      "Europe/Madrid"
    ],
    [
      "Kanchipuram, India",
      "Asia/Kolkata"
    ],
    [
      "Port Louis, Mauritius",
      "Indian/Mauritius"
    ],
    [
      "Kyonju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Guyong, Philippines",
      "Asia/Manila"
    ],
    [
      "Swindon, United Kingdom",
      "Europe/London"
    ],
    [
      "Ilheus, Brazil",
      "America/Bahia"
    ],
    [
      "Kisi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Zemun, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Salamanca, Spain",
      "Europe/Madrid"
    ],
    [
      "Hanumangarh, India",
      "Asia/Kolkata"
    ],
    [
      "Seogwipo, South Korea",
      "Asia/Seoul"
    ],
    [
      "Itajai, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Yichun, China",
      "Asia/Shanghai"
    ],
    [
      "Tema, Ghana",
      "Africa/Accra"
    ],
    [
      "Kumagaya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Malabo, Equatorial Guinea",
      "Africa/Malabo"
    ],
    [
      "Katsuta, Japan",
      "Asia/Tokyo"
    ],
    [
      "Nagareyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Fes al Bali, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Lampang, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Eugene, United States",
      "America/Los_Angeles"
    ],
    [
      "Batu Pahat, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Ruse, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Lancaster, United States",
      "America/Los_Angeles"
    ],
    [
      "Pecs, Hungary",
      "Europe/Budapest"
    ],
    [
      "Sihanoukville, Cambodia",
      "Asia/Phnom_Penh"
    ],
    [
      "Osogbo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Souk Ahras, Algeria",
      "Africa/Algiers"
    ],
    [
      "Matsue, Japan",
      "Asia/Tokyo"
    ],
    [
      "Hitachi-Naka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Westonaria, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Shikarpur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Toledo, Philippines",
      "Asia/Manila"
    ],
    [
      "Moshi, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Tiraspolul, Moldova",
      "Europe/Chisinau"
    ],
    [
      "Nanpiao, China",
      "Asia/Shanghai"
    ],
    [
      "Ussuriysk, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Pallavaram, India",
      "Asia/Kolkata"
    ],
    [
      "Perbaungan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Laventille, Trinidad and Tobago",
      "America/Port_of_Spain"
    ],
    [
      "San Blas, Spain",
      "Europe/Madrid"
    ],
    [
      "Talkha, Egypt",
      "Africa/Cairo"
    ],
    [
      "Greater Sudbury, Canada",
      "America/Toronto"
    ],
    [
      "Admiralteisky, Russia",
      "Europe/Moscow"
    ],
    [
      "Sunggal, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Sobral, Brazil",
      "America/Fortaleza"
    ],
    [
      "Gol'yanovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Melitopol', Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Centro Habana, Cuba",
      "America/Havana"
    ],
    [
      "Long Xuyen, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Orai, India",
      "Asia/Kolkata"
    ],
    [
      "Barreiras, Brazil",
      "America/Bahia"
    ],
    [
      "Huzhou, China",
      "Asia/Shanghai"
    ],
    [
      "El Achir, Algeria",
      "Africa/Algiers"
    ],
    [
      "Tempe Junction, United States",
      "America/Phoenix"
    ],
    [
      "Rzeszow, Poland",
      "Europe/Warsaw"
    ],
    [
      "Maykop, Russia",
      "Europe/Moscow"
    ],
    [
      "Samarra', Iraq",
      "Asia/Baghdad"
    ],
    [
      "Grenoble, France",
      "Europe/Paris"
    ],
    [
      "Cuddalore, India",
      "Asia/Kolkata"
    ],
    [
      "Pasuruan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Jaigaon, India",
      "Asia/Kolkata"
    ],
    [
      "Nijmegen, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Modena, Italy",
      "Europe/Rome"
    ],
    [
      "Osan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Khoroshevo-Mnevniki, Russia",
      "Europe/Moscow"
    ],
    [
      "Bibirevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Oldenburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Tarija, Bolivia",
      "America/La_Paz"
    ],
    [
      "San Miguel del Padron, Cuba",
      "America/Havana"
    ],
    [
      "Lawang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Zhicheng, China",
      "Asia/Shanghai"
    ],
    [
      "Bawshar, Oman",
      "Asia/Muscat"
    ],
    [
      "Springfield, United States",
      "America/Chicago"
    ],
    [
      "Ashikaga, Japan",
      "Asia/Tokyo"
    ],
    [
      "Skudai, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Ziguinchor, Senegal",
      "Africa/Dakar"
    ],
    [
      "Salavat, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Oyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Iskenderun, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Puerto Montt, Chile",
      "America/Santiago"
    ],
    [
      "Dhamar, Yemen",
      "Asia/Aden"
    ],
    [
      "Taunggyi, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Chapeco, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jamuria, India",
      "Asia/Kolkata"
    ],
    [
      "Mejicanos, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Xiaogan, China",
      "Asia/Shanghai"
    ],
    [
      "Hebron, Palestinian Territory",
      "Asia/Hebron"
    ],
    [
      "Kawanishi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Mytishchi, Russia",
      "Europe/Moscow"
    ],
    [
      "Phan Thiet, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "La Gi, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Malakal, South Sudan",
      "Africa/Juba"
    ],
    [
      "Sullana, Peru",
      "America/Lima"
    ],
    [
      "Sayama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Rubtsovsk, Russia",
      "Asia/Omsk"
    ],
    [
      "Madhyamgram, India",
      "Asia/Kolkata"
    ],
    [
      "Jind, India",
      "Asia/Kolkata"
    ],
    [
      "Coquimbo, Chile",
      "America/Santiago"
    ],
    [
      "Budaun, India",
      "Asia/Kolkata"
    ],
    [
      "Hortaleza, Spain",
      "Europe/Madrid"
    ],
    [
      "Unnao, India",
      "Asia/Kolkata"
    ],
    [
      "Sapele, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Tempe, United States",
      "America/Phoenix"
    ],
    [
      "Vancouver, United States",
      "America/Los_Angeles"
    ],
    [
      "San Miguel, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Kunduz, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Criciuma, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Suleja, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Dourados, Brazil",
      "America/Campo_Grande"
    ],
    [
      "Jiutepec, Mexico",
      "America/Mexico_City"
    ],
    [
      "Mahabad, Iran",
      "Asia/Tehran"
    ],
    [
      "Gadag, India",
      "Asia/Kolkata"
    ],
    [
      "La Rioja, Argentina",
      "America/Argentina/La_Rioja"
    ],
    [
      "Skikda, Algeria",
      "Africa/Algiers"
    ],
    [
      "Leverkusen, Germany",
      "Europe/Berlin"
    ],
    [
      "Sambalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Anbu, China",
      "Asia/Shanghai"
    ],
    [
      "Geneina, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Envigado, Colombia",
      "America/Bogota"
    ],
    [
      "Aydin, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Salalah, Oman",
      "Asia/Muscat"
    ],
    [
      "Bueyuekcekmece, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Ludwigshafen am Rhein, Germany",
      "Europe/Berlin"
    ],
    [
      "Tongzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Veraval, India",
      "Asia/Kolkata"
    ],
    [
      "Southend-on-Sea, United Kingdom",
      "Europe/London"
    ],
    [
      "Tsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Maradi, Niger",
      "Africa/Niamey"
    ],
    [
      "Sidon, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Bournemouth, United Kingdom",
      "Europe/London"
    ],
    [
      "Adoni, India",
      "Asia/Kolkata"
    ],
    [
      "Piraeus, Greece",
      "Europe/Athens"
    ],
    [
      "Unaizah, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Parakou, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Vinh, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Bhadravati, India",
      "Asia/Kolkata"
    ],
    [
      "Ontario, United States",
      "America/Los_Angeles"
    ],
    [
      "Nossa Senhora do Socorro, Brazil",
      "America/Maceio"
    ],
    [
      "Chalco de Diaz Covarrubias, Mexico",
      "America/Mexico_City"
    ],
    [
      "Barra Mansa, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jhelum, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Bejaia, Algeria",
      "Africa/Algiers"
    ],
    [
      "Sousse, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Nazran', Russia",
      "Europe/Moscow"
    ],
    [
      "Inisa, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Pilsen, Czech Republic",
      "Europe/Prague"
    ],
    [
      "Hawalli, Kuwait",
      "Asia/Kuwait"
    ],
    [
      "Shivpuri, India",
      "Asia/Kolkata"
    ],
    [
      "Muridke, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Kigoma, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Fergana, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Solingen, Germany",
      "Europe/Berlin"
    ],
    [
      "Burlington, Canada",
      "America/Toronto"
    ],
    [
      "Zenica, Bosnia and Herzegovina",
      "Europe/Sarajevo"
    ],
    [
      "Sitapur, India",
      "Asia/Kolkata"
    ],
    [
      "Basel, Switzerland",
      "Europe/Zurich"
    ],
    [
      "Port Saint Lucie, United States",
      "America/New_York"
    ],
    [
      "Lages, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Serang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Loni, India",
      "Asia/Kolkata"
    ],
    [
      "Fendou, China",
      "Asia/Shanghai"
    ],
    [
      "Szeged, Hungary",
      "Europe/Budapest"
    ],
    [
      "Banjaran, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Nou Barris, Spain",
      "Europe/Madrid"
    ],
    [
      "Jiaozhou, China",
      "Asia/Shanghai"
    ],
    [
      "Muzaffargarh, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Esmeraldas, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Saga, Japan",
      "Asia/Tokyo"
    ],
    [
      "Chilpancingo de los Bravos, Mexico",
      "America/Mexico_City"
    ],
    [
      "Rancho Cucamonga, United States",
      "America/Los_Angeles"
    ],
    [
      "Nandyal, India",
      "Asia/Kolkata"
    ],
    [
      "Bandar-e Bushehr, Iran",
      "Asia/Tehran"
    ],
    [
      "Tulua, Colombia",
      "America/Bogota"
    ],
    [
      "Fort Lauderdale, United States",
      "America/New_York"
    ],
    [
      "Oakville, Canada",
      "America/Toronto"
    ],
    [
      "Shanwei, China",
      "Asia/Shanghai"
    ],
    [
      "Holon, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Khobar, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Ulanhot, China",
      "Asia/Shanghai"
    ],
    [
      "Kamakura, Japan",
      "Asia/Tokyo"
    ],
    [
      "Gaozhou, China",
      "Asia/Urumqi"
    ],
    [
      "Ocumare del Tuy, Venezuela",
      "America/Caracas"
    ],
    [
      "Gandhidham, India",
      "Asia/Kolkata"
    ],
    [
      "Beni Mellal, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Osnabrueck, Germany",
      "Europe/Berlin"
    ],
    [
      "Fatehpur, India",
      "Asia/Kolkata"
    ],
    [
      "Dasoguz, Turkmenistan",
      "Asia/Ashgabat"
    ],
    [
      "Fuling, China",
      "Asia/Shanghai"
    ],
    [
      "Arapiraca, Brazil",
      "America/Maceio"
    ],
    [
      "Novocherkassk, Russia",
      "Europe/Moscow"
    ],
    [
      "Banha, Egypt",
      "Africa/Cairo"
    ],
    [
      "Oceanside, United States",
      "America/Los_Angeles"
    ],
    [
      "Plumbon, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Getafe, Spain",
      "Europe/Madrid"
    ],
    [
      "Fianarantsoa, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Abakan, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Korhogo, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Miass, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Ijero-Ekiti, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Hollywood, United States",
      "America/Los_Angeles"
    ],
    [
      "Pitesti, Romania",
      "Europe/Bucharest"
    ],
    [
      "Khouribga, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Breda, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Chattanooga, United States",
      "America/New_York"
    ],
    [
      "Volgodonsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Awka, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Berezniki, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Jingmen, China",
      "Asia/Shanghai"
    ],
    [
      "Eloy Alfaro, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Santa Rosa, United States",
      "America/Los_Angeles"
    ],
    [
      "Chirchiq, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Jamalpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Ferraz de Vasconcelos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ech Chettia, Algeria",
      "Africa/Algiers"
    ],
    [
      "Alcorcon, Spain",
      "Europe/Madrid"
    ],
    [
      "Patra, Greece",
      "Europe/Athens"
    ],
    [
      "Angers, France",
      "Europe/Paris"
    ],
    [
      "Bordj Bou Arreridj, Algeria",
      "Africa/Algiers"
    ],
    [
      "Araraquara, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jabalya, Palestinian Territory",
      "Asia/Gaza"
    ],
    [
      "Toulon, France",
      "Europe/Paris"
    ],
    [
      "Baranovichi, Belarus",
      "Europe/Minsk"
    ],
    [
      "Bahir Dar, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Arad, Romania",
      "Europe/Bucharest"
    ],
    [
      "Jaffna, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Reggio Calabria, Italy",
      "Europe/Rome"
    ],
    [
      "Jaunpur, India",
      "Asia/Kolkata"
    ],
    [
      "Laiyang, China",
      "Asia/Shanghai"
    ],
    [
      "Albacete, Spain",
      "Europe/Madrid"
    ],
    [
      "Kluang, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Horta-Guinardo, Spain",
      "Europe/Madrid"
    ],
    [
      "Fuyang, China",
      "Asia/Shanghai"
    ],
    [
      "Aracatuba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ingraj Bazar, India",
      "Asia/Kolkata"
    ],
    [
      "Takaoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Raiganj, India",
      "Asia/Kolkata"
    ],
    [
      "Portoviejo, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Uvira, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Carolina, Puerto Rico",
      "America/Puerto_Rico"
    ],
    [
      "Khammam, India",
      "Asia/Kolkata"
    ],
    [
      "Jacobabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Temirtau, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Haldia, India",
      "Asia/Kolkata"
    ],
    [
      "Puri, India",
      "Asia/Kolkata"
    ],
    [
      "Swansea, United Kingdom",
      "Europe/London"
    ],
    [
      "Garden Grove, United States",
      "America/Los_Angeles"
    ],
    [
      "Kulim, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Muelheim (Ruhr), Germany",
      "Europe/Berlin"
    ],
    [
      "Phra Pradaeng, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Bacau, Romania",
      "Europe/Bucharest"
    ],
    [
      "Dongling, China",
      "Asia/Shanghai"
    ],
    [
      "Prizren, Kosovo",
      "Europe/Belgrade"
    ],
    [
      "La Paz, Mexico",
      "America/Mazatlan"
    ],
    [
      "Bida, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Nanping, China",
      "Asia/Shanghai"
    ],
    [
      "Netanya, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Hino, Japan",
      "Asia/Tokyo"
    ],
    [
      "Francisco Morato, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Olsztyn, Poland",
      "Europe/Warsaw"
    ],
    [
      "Lyublino, Russia",
      "Europe/Moscow"
    ],
    [
      "Herne, Germany",
      "Europe/Berlin"
    ],
    [
      "Walsall, United Kingdom",
      "Europe/London"
    ],
    [
      "Kaolack, Senegal",
      "Africa/Dakar"
    ],
    [
      "Weinan, China",
      "Asia/Shanghai"
    ],
    [
      "Miskolc, Hungary",
      "Europe/Budapest"
    ],
    [
      "Salatiga, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Licheng, China",
      "Asia/Shanghai"
    ],
    [
      "Ongole, India",
      "Asia/Kolkata"
    ],
    [
      "Metepec, Mexico",
      "America/Mexico_City"
    ],
    [
      "Midrand, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Bata, Equatorial Guinea",
      "Africa/Malabo"
    ],
    [
      "Khan Yunis, Palestinian Territory",
      "Asia/Gaza"
    ],
    [
      "East New York, United States",
      "America/New_York"
    ],
    [
      "Myeik, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Overland Park, United States",
      "America/Chicago"
    ],
    [
      "Shimla, India",
      "Asia/Kolkata"
    ],
    [
      "Jackson, United States",
      "America/Chicago"
    ],
    [
      "San Pablo de las Salinas, Mexico",
      "America/Mexico_City"
    ],
    [
      "Cuajimalpa, Mexico",
      "America/Mexico_City"
    ],
    [
      "Kramators'k, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Ube, Japan",
      "Asia/Tokyo"
    ],
    [
      "Obihiro, Japan",
      "Asia/Tokyo"
    ],
    [
      "Puerto Cabello, Venezuela",
      "America/Caracas"
    ],
    [
      "Bhind, India",
      "Asia/Kolkata"
    ],
    [
      "Cikupa, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bozhou, China",
      "Asia/Shanghai"
    ],
    [
      "Hadano, Japan",
      "Asia/Tokyo"
    ],
    [
      "Pathankot, India",
      "Asia/Kolkata"
    ],
    [
      "Bo, Sierra Leone",
      "Africa/Freetown"
    ],
    [
      "Poza Rica de Hidalgo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Pamulang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "George, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Tomakomai, Japan",
      "Asia/Tokyo"
    ],
    [
      "Cotia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Naga, Philippines",
      "Asia/Manila"
    ],
    [
      "Hirosaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Brownsville, United States",
      "America/Chicago"
    ],
    [
      "Jiutai, China",
      "Asia/Shanghai"
    ],
    [
      "Siverek, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Mzuzu, Malawi",
      "Africa/Blantyre"
    ],
    [
      "Khvoy, Iran",
      "Asia/Tehran"
    ],
    [
      "Grand Prairie, United States",
      "America/Chicago"
    ],
    [
      "Saveh, Iran",
      "Asia/Tehran"
    ],
    [
      "Tsukuba, Japan",
      "Asia/Tokyo"
    ],
    [
      "Bella Vista, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Xindi, China",
      "Asia/Shanghai"
    ],
    [
      "Turku, Finland",
      "Europe/Helsinki"
    ],
    [
      "Saint-Louis, Senegal",
      "Africa/Dakar"
    ],
    [
      "Zhenzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Regina, Canada",
      "America/Regina"
    ],
    [
      "Amroha, India",
      "Asia/Kolkata"
    ],
    [
      "Saint-Etienne, France",
      "Europe/Paris"
    ],
    [
      "Split, Croatia",
      "Europe/Zagreb"
    ],
    [
      "Santa Clarita, United States",
      "America/Los_Angeles"
    ],
    [
      "Almere Stad, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Yuzhno-Sakhalinsk, Russia",
      "Asia/Sakhalin"
    ],
    [
      "Bielsko-Biala, Poland",
      "Europe/Warsaw"
    ],
    [
      "Malayer, Iran",
      "Asia/Tehran"
    ],
    [
      "Santa Ana, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Alleppey, India",
      "Asia/Kolkata"
    ],
    [
      "Hugli, India",
      "Asia/Kolkata"
    ],
    [
      "Vellore, India",
      "Asia/Kolkata"
    ],
    [
      "Loum, Cameroon",
      "Africa/Douala"
    ],
    [
      "Meiktila, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Sants-Montjuic, Spain",
      "Europe/Madrid"
    ],
    [
      "Norwich, United Kingdom",
      "Europe/London"
    ],
    [
      "Ar Raqqah, Syria",
      "Asia/Damascus"
    ],
    [
      "Sittwe, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Proddatur, India",
      "Asia/Kolkata"
    ],
    [
      "Jingzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Sunderland, United Kingdom",
      "Europe/London"
    ],
    [
      "Habana del Este, Cuba",
      "America/Havana"
    ],
    [
      "Providence, United States",
      "America/New_York"
    ],
    [
      "Kutaisi, Georgia",
      "Asia/Tbilisi"
    ],
    [
      "Spring Valley, United States",
      "America/Los_Angeles"
    ],
    [
      "Anjo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Chlef, Algeria",
      "Africa/Algiers"
    ],
    [
      "Saki, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Kamirenjaku, Japan",
      "Asia/Tokyo"
    ],
    [
      "Amadora, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Knoxville, United States",
      "America/New_York"
    ],
    [
      "Tiaret, Algeria",
      "Africa/Algiers"
    ],
    [
      "Si Racha, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Klerksdorp, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Burgos, Spain",
      "Europe/Madrid"
    ],
    [
      "Chenzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Qianjiang, China",
      "Asia/Shanghai"
    ],
    [
      "Ila Orangun, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Vizianagaram, India",
      "Asia/Kolkata"
    ],
    [
      "Podol'sk, Russia",
      "Europe/Moscow"
    ],
    [
      "Cotabato, Philippines",
      "Asia/Manila"
    ],
    [
      "Sayibage, China",
      "Asia/Urumqi"
    ],
    [
      "Legaspi, Philippines",
      "Asia/Manila"
    ],
    [
      "Xianning, China",
      "Asia/Shanghai"
    ],
    [
      "Passo Fundo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Dos Quebradas, Colombia",
      "America/Bogota"
    ],
    [
      "Varamin, Iran",
      "Asia/Tehran"
    ],
    [
      "Surendranagar, India",
      "Asia/Kolkata"
    ],
    [
      "Indaiatuba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Yangju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Atyrau, Kazakhstan",
      "Asia/Oral"
    ],
    [
      "Yasenevo, Russia",
      "Europe/Moscow"
    ],
    [
      "Castello de la Plana, Spain",
      "Europe/Madrid"
    ],
    [
      "Huntsville, United States",
      "America/Chicago"
    ],
    [
      "Matadi, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Tangail, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Rio Claro, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Dodoma, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Baharampur, India",
      "Asia/Kolkata"
    ],
    [
      "Kang-neung, South Korea",
      "Asia/Seoul"
    ],
    [
      "Chandannagar, India",
      "Asia/Kolkata"
    ],
    [
      "Malacca, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Newport News, United States",
      "America/New_York"
    ],
    [
      "Worcester, United States",
      "America/New_York"
    ],
    [
      "Taranto, Italy",
      "Europe/Rome"
    ],
    [
      "Linz, Austria",
      "Europe/Vienna"
    ],
    [
      "Groningen, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Wadi as Sir, Jordan",
      "Asia/Amman"
    ],
    [
      "Shangqiu, China",
      "Asia/Shanghai"
    ],
    [
      "Saarbruecken, Germany",
      "Europe/Berlin"
    ],
    [
      "Anda, China",
      "Asia/Shanghai"
    ],
    [
      "Tallahassee, United States",
      "America/New_York"
    ],
    [
      "Guarenas, Venezuela",
      "America/Caracas"
    ],
    [
      "Sirsa, India",
      "Asia/Kolkata"
    ],
    [
      "Probolinggo, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Prato, Italy",
      "Europe/Rome"
    ],
    [
      "Richmond, Canada",
      "America/Vancouver"
    ],
    [
      "Monywa, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Barrie, Canada",
      "America/Toronto"
    ],
    [
      "Bahraigh, India",
      "Asia/Kolkata"
    ],
    [
      "Carletonville, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Biratnagar, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Blida, Algeria",
      "Africa/Algiers"
    ],
    [
      "Itaborai, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kamensk-Ural'skiy, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Sakura, Japan",
      "Asia/Tokyo"
    ],
    [
      "Cua, Venezuela",
      "America/Caracas"
    ],
    [
      "Liege, Belgium",
      "Europe/Brussels"
    ],
    [
      "Santander, Spain",
      "Europe/Madrid"
    ],
    [
      "Khandwa, India",
      "Asia/Kolkata"
    ],
    [
      "Mitaka-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Pak Kret, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Bhusaval, India",
      "Asia/Kolkata"
    ],
    [
      "Lembang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Manta, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Patan, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Ellore, India",
      "Asia/Kolkata"
    ],
    [
      "Corum, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Cergy-Pontoise, France",
      "Europe/Paris"
    ],
    [
      "Kushiro, Japan",
      "Asia/Tokyo"
    ],
    [
      "Zaozhuang, China",
      "Asia/Shanghai"
    ],
    [
      "Aberdeen, United Kingdom",
      "Europe/London"
    ],
    [
      "Sujangarh, India",
      "Asia/Kolkata"
    ],
    [
      "Baishan, China",
      "Asia/Shanghai"
    ],
    [
      "Burewala, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Tarlac City, Philippines",
      "Asia/Manila"
    ],
    [
      "Geneve, Switzerland",
      "Europe/Zurich"
    ],
    [
      "San Luis, Argentina",
      "America/Argentina/San_Luis"
    ],
    [
      "Quanzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Pemalang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Mbandaka, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Mutare, Zimbabwe",
      "Africa/Harare"
    ],
    [
      "Junagadh, India",
      "Asia/Kolkata"
    ],
    [
      "Milton Keynes, United Kingdom",
      "Europe/London"
    ],
    [
      "Zaoyang, China",
      "Asia/Shanghai"
    ],
    [
      "Brescia, Italy",
      "Europe/Rome"
    ],
    [
      "Meycauayan, Philippines",
      "Asia/Manila"
    ],
    [
      "Mainz, Germany",
      "Europe/Berlin"
    ],
    [
      "Kutahya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Moratuwa, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Jamaame, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Hamm, Germany",
      "Europe/Berlin"
    ],
    [
      "San Sebastian, Spain",
      "Europe/Madrid"
    ],
    [
      "Dun Laoghaire, Ireland",
      "Europe/Dublin"
    ],
    [
      "Richmond Hill, Canada",
      "America/Toronto"
    ],
    [
      "Singrauli, India",
      "Asia/Kolkata"
    ],
    [
      "Nogales, Mexico",
      "America/Hermosillo"
    ],
    [
      "Le Havre, France",
      "Europe/Paris"
    ],
    [
      "Arica, Chile",
      "America/Santiago"
    ],
    [
      "Ad-Damazin, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Leganes, Spain",
      "Europe/Madrid"
    ],
    [
      "Haridwar, India",
      "Asia/Kolkata"
    ],
    [
      "Madiun, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Zawiya, Libya",
      "Africa/Tripoli"
    ],
    [
      "Antsirabe, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Hitachi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Shibin al Kawm, Egypt",
      "Africa/Cairo"
    ],
    [
      "Springs, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Raebareli, India",
      "Asia/Kolkata"
    ],
    [
      "Salt Lake City, United States",
      "America/Denver"
    ],
    [
      "Beersheba, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Cienfuegos, Cuba",
      "America/Havana"
    ],
    [
      "Pabna, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Pagadian, Philippines",
      "Asia/Manila"
    ],
    [
      "Pinar del Rio, Cuba",
      "America/Havana"
    ],
    [
      "Kikwit, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Cachoeiro de Itapemirim, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Trieste, Italy",
      "Europe/Rome"
    ],
    [
      "Puerto Vallarta, Mexico",
      "America/Mexico_City"
    ],
    [
      "Oxnard Shores, United States",
      "America/Los_Angeles"
    ],
    [
      "Petropavlovsk-Kamchatsky, Russia",
      "Asia/Kamchatka"
    ],
    [
      "Qo`qon, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Sutton, United Kingdom",
      "Europe/London"
    ],
    [
      "Mohammedia, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Rio Grande, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Praga Poludnie, Poland",
      "Europe/Warsaw"
    ],
    [
      "Kultali, India",
      "Asia/Kolkata"
    ],
    [
      "Santa Barbara d'Oeste, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Grand Rapids, United States",
      "America/Detroit"
    ],
    [
      "Mabalacat City, Philippines",
      "Asia/Manila"
    ],
    [
      "Baiyin, China",
      "Asia/Shanghai"
    ],
    [
      "Boyeros, Cuba",
      "America/Havana"
    ],
    [
      "Donghai, China",
      "Asia/Shanghai"
    ],
    [
      "Cibinong, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Labuan Bajo, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Camacari, Brazil",
      "America/Bahia"
    ],
    [
      "Almeria, Spain",
      "Europe/Madrid"
    ],
    [
      "San Fernando del Valle de Catamarca, Argentina",
      "America/Argentina/Catamarca"
    ],
    [
      "Quelimane, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Kabwe, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Wanxian, China",
      "Asia/Shanghai"
    ],
    [
      "Santarem, Brazil",
      "America/Santarem"
    ],
    [
      "Izumi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Panalanoy, Philippines",
      "Asia/Manila"
    ],
    [
      "Mwene-Ditu, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Bytom, Poland",
      "Europe/Warsaw"
    ],
    [
      "Syzran', Russia",
      "Europe/Samara"
    ],
    [
      "Sunrise Manor, United States",
      "America/Los_Angeles"
    ],
    [
      "Bani Suwayf, Egypt",
      "Africa/Cairo"
    ],
    [
      "Sadiqabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Columbus, United States",
      "America/New_York"
    ],
    [
      "Huntington Beach, United States",
      "America/Los_Angeles"
    ],
    [
      "Kofu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Paarl, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Vantaa, Finland",
      "Europe/Helsinki"
    ],
    [
      "Ise-Ekiti, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Al Fallujah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Cork, Ireland",
      "Europe/Dublin"
    ],
    [
      "Zoucheng, China",
      "Asia/Shanghai"
    ],
    [
      "Preston, United Kingdom",
      "Europe/London"
    ],
    [
      "Amarillo, United States",
      "America/Chicago"
    ],
    [
      "Bhiwani, India",
      "Asia/Kolkata"
    ],
    [
      "Ormoc, Philippines",
      "Asia/Manila"
    ],
    [
      "Zlatoust, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Barrancabermeja, Colombia",
      "America/Bogota"
    ],
    [
      "Curug, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Zinder, Niger",
      "Africa/Niamey"
    ],
    [
      "Suzuka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Haicheng, China",
      "Asia/Shanghai"
    ],
    [
      "Hat Yai, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Glendale, United States",
      "America/Los_Angeles"
    ],
    [
      "Sidi Bel Abbes, Algeria",
      "Africa/Algiers"
    ],
    [
      "Humen, China",
      "Asia/Shanghai"
    ],
    [
      "Guatire, Venezuela",
      "America/Caracas"
    ],
    [
      "Bojnurd, Iran",
      "Asia/Tehran"
    ],
    [
      "Zabrze, Poland",
      "Europe/Warsaw"
    ],
    [
      "Klaipeda, Lithuania",
      "Europe/Vilnius"
    ],
    [
      "Newcastle upon Tyne, United Kingdom",
      "Europe/London"
    ],
    [
      "Par Naogaon, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Tanjungpinang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Katihar, India",
      "Asia/Kolkata"
    ],
    [
      "Bayamo, Cuba",
      "America/Havana"
    ],
    [
      "Hyesan-si, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Ciudad Madero, Mexico",
      "America/Monterrey"
    ],
    [
      "Machilipatnam, India",
      "Asia/Kolkata"
    ],
    [
      "Uji, Japan",
      "Asia/Tokyo"
    ],
    [
      "Moreno Valley, United States",
      "America/Los_Angeles"
    ],
    [
      "Thanh Pho Nam Dinh, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Itami, Japan",
      "Asia/Tokyo"
    ],
    [
      "Little Rock, United States",
      "America/Chicago"
    ],
    [
      "Maracanau, Brazil",
      "America/Fortaleza"
    ],
    [
      "Ezhou, China",
      "Asia/Shanghai"
    ],
    [
      "Luton, United Kingdom",
      "Europe/London"
    ],
    [
      "Basaksehir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Divinopolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Parung, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Nnewi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Soledad Diez Gutierrez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Portsmouth, United Kingdom",
      "Europe/London"
    ],
    [
      "Severodvinsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Nangloi Jat, India",
      "Asia/Kolkata"
    ],
    [
      "Kassel, Germany",
      "Europe/Berlin"
    ],
    [
      "Yamoussoukro, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Petrolina, Brazil",
      "America/Recife"
    ],
    [
      "Kendari, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Mobile, United States",
      "America/Chicago"
    ],
    [
      "Xinhui, China",
      "Asia/Shanghai"
    ],
    [
      "Nishi-Tokyo-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Coro, Venezuela",
      "America/Caracas"
    ],
    [
      "Guri-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Nagaoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Monclova, Mexico",
      "America/Monterrey"
    ],
    [
      "Murwara, India",
      "Asia/Kolkata"
    ],
    [
      "Burgas, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Yonkers, United States",
      "America/New_York"
    ],
    [
      "Ghandinagar, India",
      "Asia/Kolkata"
    ],
    [
      "Engel's, Russia",
      "Europe/Volgograd"
    ],
    [
      "Americana, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Fontana, United States",
      "America/Los_Angeles"
    ],
    [
      "Sambhal, India",
      "Asia/Kolkata"
    ],
    [
      "Townsville, Australia",
      "Australia/Brisbane"
    ],
    [
      "Icheon-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Palmas, Brazil",
      "America/Araguaina"
    ],
    [
      "Laayoune / El Aaiun, Western Sahara",
      "Africa/Casablanca"
    ],
    [
      "Reims, France",
      "Europe/Paris"
    ],
    [
      "Izmit, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Kure, Japan",
      "Asia/Tokyo"
    ],
    [
      "Vientiane, Laos",
      "Asia/Vientiane"
    ],
    [
      "San-Pedro, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Birjand, Iran",
      "Asia/Tehran"
    ],
    [
      "Da Lat, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Northampton, United Kingdom",
      "Europe/London"
    ],
    [
      "Gurgaon, India",
      "Asia/Kolkata"
    ],
    [
      "Talca, Chile",
      "America/Santiago"
    ],
    [
      "Mentougou, China",
      "Asia/Shanghai"
    ],
    [
      "Fuenlabrada, Spain",
      "Europe/Madrid"
    ],
    [
      "Hospet, India",
      "Asia/Kolkata"
    ],
    [
      "Aurora, United States",
      "America/Chicago"
    ],
    [
      "Oxnard, United States",
      "America/Los_Angeles"
    ],
    [
      "Tapachula, Mexico",
      "America/Mexico_City"
    ],
    [
      "Machala, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Sibu, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Rostock, Germany",
      "Europe/Berlin"
    ],
    [
      "Tacoma, United States",
      "America/Los_Angeles"
    ],
    [
      "Kaiyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Purnia, India",
      "Asia/Kolkata"
    ],
    [
      "Pamplona, Spain",
      "Europe/Madrid"
    ],
    [
      "Capiata, Paraguay",
      "America/Asuncion"
    ],
    [
      "Bulandshahr, India",
      "Asia/Kolkata"
    ],
    [
      "Malolos, Philippines",
      "Asia/Manila"
    ],
    [
      "Changji, China",
      "Asia/Urumqi"
    ],
    [
      "Gliwice, Poland",
      "Europe/Warsaw"
    ],
    [
      "Saskatoon, Canada",
      "America/Regina"
    ],
    [
      "Hagen, Germany",
      "Europe/Berlin"
    ],
    [
      "Dudley, United Kingdom",
      "Europe/London"
    ],
    [
      "Akron, United States",
      "America/New_York"
    ],
    [
      "Bila Tserkva, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Shreveport, United States",
      "America/Chicago"
    ],
    [
      "Amol, Iran",
      "Asia/Tehran"
    ],
    [
      "Saidpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Kamoke, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Armavir, Russia",
      "Europe/Moscow"
    ],
    [
      "Balakovo, Russia",
      "Europe/Volgograd"
    ],
    [
      "Tilburg, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Sikar, India",
      "Asia/Kolkata"
    ],
    [
      "Sao Jose, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ladner, Canada",
      "America/Vancouver"
    ],
    [
      "Petah Tiqwa, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Thika, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Osh, Kyrgyzstan",
      "Asia/Bishkek"
    ],
    [
      "Oral, Kazakhstan",
      "Asia/Oral"
    ],
    [
      "Taldyqorghan, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Az Zawiyah, Libya",
      "Africa/Tripoli"
    ],
    [
      "Pokhara, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Shahkot, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Severnyy, Russia",
      "Europe/Moscow"
    ],
    [
      "Charleroi, Belgium",
      "Europe/Brussels"
    ],
    [
      "Yanbu, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Ugep, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Jalalabad, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Santo Domingo de los Colorados, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Nicosia, Cyprus",
      "Asia/Nicosia"
    ],
    [
      "Fayetteville, United States",
      "America/New_York"
    ],
    [
      "Dindigul, India",
      "Asia/Kolkata"
    ],
    [
      "Cabimas, Venezuela",
      "America/Caracas"
    ],
    [
      "Petropavl, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Chiang Mai, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Modesto, United States",
      "America/Los_Angeles"
    ],
    [
      "La Pintana, Chile",
      "America/Santiago"
    ],
    [
      "Sete Lagoas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Rengasdengklok, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Chapra, India",
      "Asia/Kolkata"
    ],
    [
      "Itapevi, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Chiniot, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Al Khums, Libya",
      "Africa/Tripoli"
    ],
    [
      "Yuncheng, China",
      "Asia/Shanghai"
    ],
    [
      "Pskov, Russia",
      "Europe/Moscow"
    ],
    [
      "Mossoro, Brazil",
      "America/Fortaleza"
    ],
    [
      "Nadiad, India",
      "Asia/Kolkata"
    ],
    [
      "Cileungsir, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Barisal, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Linxia Chengguanzhen, China",
      "Asia/Shanghai"
    ],
    [
      "Harburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Corlu, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Yiyang, China",
      "Asia/Shanghai"
    ],
    [
      "Tampere, Finland",
      "Europe/Helsinki"
    ],
    [
      "Burhanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Babol, Iran",
      "Asia/Tehran"
    ],
    [
      "Burnaby, Canada",
      "America/Vancouver"
    ],
    [
      "Osmaniye, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Achiaman, Ghana",
      "Africa/Accra"
    ],
    [
      "Odawara, Japan",
      "Asia/Tokyo"
    ],
    [
      "Vasyl'evsky Ostrov, Russia",
      "Europe/Moscow"
    ],
    [
      "Edea, Cameroon",
      "Africa/Douala"
    ],
    [
      "Monghyr, India",
      "Asia/Kolkata"
    ],
    [
      "North Glendale, United States",
      "America/Los_Angeles"
    ],
    [
      "Erfurt, Germany",
      "Europe/Berlin"
    ],
    [
      "Agartala, India",
      "Asia/Kolkata"
    ],
    [
      "Des Moines, United States",
      "America/Chicago"
    ],
    [
      "Daqing, China",
      "Asia/Shanghai"
    ],
    [
      "Bayamon, Puerto Rico",
      "America/Puerto_Rico"
    ],
    [
      "Hortolandia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Las Tunas, Cuba",
      "America/Havana"
    ],
    [
      "Padova, Italy",
      "Europe/Rome"
    ],
    [
      "Bidar, India",
      "Asia/Kolkata"
    ],
    [
      "Debrecen, Hungary",
      "Europe/Budapest"
    ],
    [
      "Joetsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Secunderabad, India",
      "Asia/Kolkata"
    ],
    [
      "Ivano-Frankivs'k, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Richmond, United States",
      "America/New_York"
    ],
    [
      "Numazu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Gaoping, China",
      "Asia/Shanghai"
    ],
    [
      "Alcala de Henares, Spain",
      "Europe/Madrid"
    ],
    [
      "Sao Carlos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Suzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Campeche, Mexico",
      "America/Merida"
    ],
    [
      "Kishiwada, Japan",
      "Asia/Tokyo"
    ],
    [
      "Itabuna, Brazil",
      "America/Bahia"
    ],
    [
      "Montgomery, United States",
      "America/Chicago"
    ],
    [
      "Buenavista, Mexico",
      "America/Mexico_City"
    ],
    [
      "Dinajpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Toamasina, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Mostoles, Spain",
      "Europe/Madrid"
    ],
    [
      "Sabadell, Spain",
      "Europe/Madrid"
    ],
    [
      "Annaba, Algeria",
      "Africa/Algiers"
    ],
    [
      "Oradea, Romania",
      "Europe/Bucharest"
    ],
    [
      "Sumedang Utara, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kasukabe, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ciampea, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Jerez de la Frontera, Spain",
      "Europe/Madrid"
    ],
    [
      "San Pablo, Philippines",
      "Asia/Manila"
    ],
    [
      "Arlington, United States",
      "America/New_York"
    ],
    [
      "Sirjan, Iran",
      "Asia/Tehran"
    ],
    [
      "Ciputat, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "North Shore, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Lobito, Angola",
      "Africa/Luanda"
    ],
    [
      "Waitakere, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Hangu, China",
      "Asia/Shanghai"
    ],
    [
      "Gaborone, Botswana",
      "Africa/Gaborone"
    ],
    [
      "La Romana, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Gilbert, United States",
      "America/Phoenix"
    ],
    [
      "Rewa, India",
      "Asia/Kolkata"
    ],
    [
      "Kielce, Poland",
      "Europe/Warsaw"
    ],
    [
      "Oruro, Bolivia",
      "America/La_Paz"
    ],
    [
      "Torun, Poland",
      "Europe/Warsaw"
    ],
    [
      "Nakhon Ratchasima, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Spokane, United States",
      "America/Los_Angeles"
    ],
    [
      "Yamunanagar, India",
      "Asia/Kolkata"
    ],
    [
      "Ijebu-Ode, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Sao Leopoldo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Rennes, France",
      "Europe/Paris"
    ],
    [
      "Sohag, Egypt",
      "Africa/Cairo"
    ],
    [
      "Sanming, China",
      "Asia/Shanghai"
    ],
    [
      "Presidente Prudente, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kanggye-si, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Pematangsiantar, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Eindhoven, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Vung Tau, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Chuncheon, South Korea",
      "Asia/Seoul"
    ],
    [
      "San Bernardino, United States",
      "America/Los_Angeles"
    ],
    [
      "Bogra, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Kostanay, Kazakhstan",
      "Asia/Qyzylorda"
    ],
    [
      "Antakya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Arroyo Naranjo, Cuba",
      "America/Havana"
    ],
    [
      "Arroyo Naranjo, Cuba",
      "America/Havana"
    ],
    [
      "Pali, India",
      "Asia/Kolkata"
    ],
    [
      "Qui Nhon, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Daliang, China",
      "Asia/Shanghai"
    ],
    [
      "Rochester, United States",
      "America/New_York"
    ],
    [
      "Matsumoto, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tarhuna, Libya",
      "Africa/Tripoli"
    ],
    [
      "Abha, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Terrassa, Spain",
      "Europe/Madrid"
    ],
    [
      "Hailar, China",
      "Asia/Shanghai"
    ],
    [
      "Kirikkale, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Esenyurt, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Cartagena, Spain",
      "Europe/Madrid"
    ],
    [
      "Sepang, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Luebeck, Germany",
      "Europe/Berlin"
    ],
    [
      "Marilia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Birmingham, United States",
      "America/Chicago"
    ],
    [
      "Lipa City, Philippines",
      "Asia/Manila"
    ],
    [
      "Bukit Mertajam, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Mokotow, Poland",
      "Europe/Warsaw"
    ],
    [
      "Rancagua, Chile",
      "America/Santiago"
    ],
    [
      "Loa Janan, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Chofugaoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jacarei, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bukan, Iran",
      "Asia/Tehran"
    ],
    [
      "Guangyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Nazarabad, Iran",
      "Asia/Tehran"
    ],
    [
      "Braila, Romania",
      "Europe/Bucharest"
    ],
    [
      "Bergen, Norway",
      "Europe/Oslo"
    ],
    [
      "Luts'k, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Nagercoil, India",
      "Asia/Kolkata"
    ],
    [
      "Nazret, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Fremont, United States",
      "America/Los_Angeles"
    ],
    [
      "Taboao da Serra, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Shagamu, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Los Mochis, Mexico",
      "America/Mazatlan"
    ],
    [
      "Centralniy, Russia",
      "Europe/Moscow"
    ],
    [
      "Owerri, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Velikiy Novgorod, Russia",
      "Europe/Moscow"
    ],
    [
      "Mucumpiz, Venezuela",
      "America/Caracas"
    ],
    [
      "Jinzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Novi Sad, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Concepcion, Chile",
      "America/Santiago"
    ],
    [
      "Biysk, Russia",
      "Asia/Omsk"
    ],
    [
      "Mekele, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Daloa, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Mirpur Khas, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Zelenograd, Russia",
      "Europe/Moscow"
    ],
    [
      "Purwakarta, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Galkissa, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Freiburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Vykhino-Zhulebino, Russia",
      "Europe/Moscow"
    ],
    [
      "Imus, Philippines",
      "Asia/Manila"
    ],
    [
      "Kisumu, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Santa Rosa, Philippines",
      "Asia/Manila"
    ],
    [
      "Hobart, Australia",
      "Australia/Hobart"
    ],
    [
      "Rybinsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Jamaica, United States",
      "America/New_York"
    ],
    [
      "North Las Vegas, United States",
      "America/Los_Angeles"
    ],
    [
      "Colombo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Purwokerto, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Alor Setar, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Scottsdale, United States",
      "America/Phoenix"
    ],
    [
      "Taiping, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Amarnath, India",
      "Asia/Kolkata"
    ],
    [
      "San Pedro de Macoris, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Imperatriz, Brazil",
      "America/Fortaleza"
    ],
    [
      "Bertoua, Cameroon",
      "Africa/Douala"
    ],
    [
      "Wuhai, China",
      "Asia/Shanghai"
    ],
    [
      "Eldoret, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Prokop'yevsk, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Verona, Italy",
      "Europe/Rome"
    ],
    [
      "Chon Buri, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Oberhausen, Germany",
      "Europe/Berlin"
    ],
    [
      "Binangonan, Philippines",
      "Asia/Manila"
    ],
    [
      "Ageoshimo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Badalona, Spain",
      "Europe/Madrid"
    ],
    [
      "Thanjavur, India",
      "Asia/Kolkata"
    ],
    [
      "Dhanbad, India",
      "Asia/Kolkata"
    ],
    [
      "Kharagpur, India",
      "Asia/Kolkata"
    ],
    [
      "Takarazuka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Dehiwala-Mount Lavinia, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Mount Lavinia, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Messina, Italy",
      "Europe/Rome"
    ],
    [
      "Mirzapur, India",
      "Asia/Kolkata"
    ],
    [
      "Fuencarral-El Pardo, Spain",
      "Europe/Madrid"
    ],
    [
      "Cabanatuan City, Philippines",
      "Asia/Manila"
    ],
    [
      "Rishon LeZiyyon, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Babruysk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Wuxue, China",
      "Asia/Shanghai"
    ],
    [
      "Nishabur, Iran",
      "Asia/Tehran"
    ],
    [
      "Sant Marti, Spain",
      "Europe/Madrid"
    ],
    [
      "Banja Luka, Bosnia and Herzegovina",
      "Europe/Sarajevo"
    ],
    [
      "Olongapo, Philippines",
      "Asia/Manila"
    ],
    [
      "Blagoveshchensk, Russia",
      "Asia/Yakutsk"
    ],
    [
      "Shakhty, Russia",
      "Europe/Moscow"
    ],
    [
      "Formosa, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Embu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ikire, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Chesapeake, United States",
      "America/New_York"
    ],
    [
      "Graz, Austria",
      "Europe/Vienna"
    ],
    [
      "Haeju, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Santa Cruz de Tenerife, Spain",
      "Atlantic/Canary"
    ],
    [
      "Xintai, China",
      "Asia/Shanghai"
    ],
    [
      "Puerto Princesa, Philippines",
      "Asia/Manila"
    ],
    [
      "Gosaba, India",
      "Asia/Kolkata"
    ],
    [
      "Qarshi, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Paradise, United States",
      "America/Los_Angeles"
    ],
    [
      "Najafabad, Iran",
      "Asia/Tehran"
    ],
    [
      "Imphal, India",
      "Asia/Kolkata"
    ],
    [
      "Tongchuan, China",
      "Asia/Shanghai"
    ],
    [
      "Narayanganj, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Okara, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Arrah, India",
      "Asia/Kolkata"
    ],
    [
      "Adiyaman, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Paramaribo, Suriname",
      "America/Paramaribo"
    ],
    [
      "Oviedo, Spain",
      "Europe/Madrid"
    ],
    [
      "Minamirinkan, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ashdod, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Hialeah, United States",
      "America/New_York"
    ],
    [
      "Nacala, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Sucre, Bolivia",
      "America/La_Paz"
    ],
    [
      "Jingling, China",
      "Asia/Shanghai"
    ],
    [
      "Tanga, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Roodepoort, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Karnal, India",
      "Asia/Kolkata"
    ],
    [
      "Mymensingh, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Reno, United States",
      "America/Los_Angeles"
    ],
    [
      "Juazeiro do Norte, Brazil",
      "America/Fortaleza"
    ],
    [
      "Lexington, United States",
      "America/New_York"
    ],
    [
      "Bukavu, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Sector 1, Romania",
      "Europe/Bucharest"
    ],
    [
      "Mubi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Quthbullapur, India",
      "Asia/Kolkata"
    ],
    [
      "Huanggang, China",
      "Asia/Shanghai"
    ],
    [
      "Raichur, India",
      "Asia/Kolkata"
    ],
    [
      "Geelong, Australia",
      "Australia/Melbourne"
    ],
    [
      "Groznyy, Russia",
      "Europe/Moscow"
    ],
    [
      "Huambo, Angola",
      "Africa/Luanda"
    ],
    [
      "Ajman, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Sabzevar, Iran",
      "Asia/Tehran"
    ],
    [
      "Fendou, China",
      "Asia/Shanghai"
    ],
    [
      "Shrirampur, India",
      "Asia/Kolkata"
    ],
    [
      "Glendale, United States",
      "America/Phoenix"
    ],
    [
      "Radom, Poland",
      "Europe/Warsaw"
    ],
    [
      "Neue Neustadt, Germany",
      "Europe/Berlin"
    ],
    [
      "Gusau, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Garland, United States",
      "America/Chicago"
    ],
    [
      "Liaocheng, China",
      "Asia/Shanghai"
    ],
    [
      "Staryy Oskol, Russia",
      "Europe/Moscow"
    ],
    [
      "Al Minya, Egypt",
      "Africa/Cairo"
    ],
    [
      "Diez de Octubre, Cuba",
      "America/Havana"
    ],
    [
      "Sosnowiec, Poland",
      "Europe/Warsaw"
    ],
    [
      "Puducherry, India",
      "Asia/Kolkata"
    ],
    [
      "Kremenchuk, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Iquique, Chile",
      "America/Santiago"
    ],
    [
      "San Lorenzo, Paraguay",
      "America/Asuncion"
    ],
    [
      "Nassau, Bahamas",
      "America/Nassau"
    ],
    [
      "Damanhur, Egypt",
      "Africa/Cairo"
    ],
    [
      "Sumare, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bexley, United Kingdom",
      "Europe/London"
    ],
    [
      "Ciudad Lineal, Spain",
      "Europe/Madrid"
    ],
    [
      "Miri, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Lille, France",
      "Europe/Paris"
    ],
    [
      "Durham, United States",
      "America/New_York"
    ],
    [
      "Rach Gia, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Gomez Palacio, Mexico",
      "America/Monterrey"
    ],
    [
      "Karimnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Ipatinga, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Lucena, Philippines",
      "Asia/Manila"
    ],
    [
      "Binjai, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Sungai Petani, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Ploiesti, Romania",
      "Europe/Bucharest"
    ],
    [
      "Uitenhage, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Magdalena Contreras, Mexico",
      "America/Mexico_City"
    ],
    [
      "Croix des Bouquets, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Atsugi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Longueuil, Canada",
      "America/Toronto"
    ],
    [
      "Bharatpur, India",
      "Asia/Kolkata"
    ],
    [
      "Tripoli, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Baton Rouge, United States",
      "America/Chicago"
    ],
    [
      "Nawabshah, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Lubbock, United States",
      "America/Chicago"
    ],
    [
      "Winston-Salem, United States",
      "America/New_York"
    ],
    [
      "Magdeburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Halwan, Egypt",
      "Africa/Cairo"
    ],
    [
      "Nukus, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Marka, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Elche, Spain",
      "Europe/Madrid"
    ],
    [
      "Syktyvkar, Russia",
      "Europe/Moscow"
    ],
    [
      "Coatzacoalcos, Mexico",
      "America/Mexico_City"
    ],
    [
      "Suncheon, South Korea",
      "Asia/Seoul"
    ],
    [
      "Ngaoundere, Cameroon",
      "Africa/Douala"
    ],
    [
      "Soka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Taytay, Philippines",
      "Asia/Manila"
    ],
    [
      "Gent, Belgium",
      "Europe/Brussels"
    ],
    [
      "Chigasaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ganganagar, India",
      "Asia/Kolkata"
    ],
    [
      "Bordeaux, France",
      "Europe/Paris"
    ],
    [
      "Linfen, China",
      "Asia/Shanghai"
    ],
    [
      "Kiel, Germany",
      "Europe/Berlin"
    ],
    [
      "Takoradi, Ghana",
      "Africa/Accra"
    ],
    [
      "Hamburg-Mitte, Germany",
      "Europe/Berlin"
    ],
    [
      "Madison, United States",
      "America/Chicago"
    ],
    [
      "Tagum, Philippines",
      "Asia/Manila"
    ],
    [
      "Centurion, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Kitchener, Canada",
      "America/Toronto"
    ],
    [
      "Halle (Saale), Germany",
      "Europe/Berlin"
    ],
    [
      "Porto-Novo, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Nizhnekamsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Granada, Spain",
      "Europe/Madrid"
    ],
    [
      "Turkmenabat, Turkmenistan",
      "Asia/Ashgabat"
    ],
    [
      "Ibb, Yemen",
      "Asia/Aden"
    ],
    [
      "Kismayo, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Ramagundam, India",
      "Asia/Kolkata"
    ],
    [
      "Georgetown, Guyana",
      "America/Guyana"
    ],
    [
      "Derby, United Kingdom",
      "Europe/London"
    ],
    [
      "Kediri, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Boa Vista, Brazil",
      "America/Boa_Vista"
    ],
    [
      "Qina, Egypt",
      "Africa/Cairo"
    ],
    [
      "Caruaru, Brazil",
      "America/Recife"
    ],
    [
      "Yakutsk, Russia",
      "Asia/Yakutsk"
    ],
    [
      "Gasteiz / Vitoria, Spain",
      "Europe/Madrid"
    ],
    [
      "Ternopil', Ukraine",
      "Europe/Kiev"
    ],
    [
      "Sahiwal, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Yuci, China",
      "Asia/Shanghai"
    ],
    [
      "Laredo, United States",
      "America/Chicago"
    ],
    [
      "Dera Ghazi Khan, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Chandler, United States",
      "America/Phoenix"
    ],
    [
      "Chernivtsi, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Kosice, Slovakia",
      "Europe/Bratislava"
    ],
    [
      "Ratlam, India",
      "Asia/Kolkata"
    ],
    [
      "Sylhet, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Djougou, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Tegal, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Pathein, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Al Jubayl, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Uruapan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Batangas, Philippines",
      "Asia/Manila"
    ],
    [
      "Sasebo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Arhus, Denmark",
      "Europe/Copenhagen"
    ],
    [
      "Barasat, India",
      "Asia/Kolkata"
    ],
    [
      "Seeb, Oman",
      "Asia/Muscat"
    ],
    [
      "Krefeld, Germany",
      "Europe/Berlin"
    ],
    [
      "Temuco, Chile",
      "America/Santiago"
    ],
    [
      "Balikesir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Kurume, Japan",
      "Asia/Tokyo"
    ],
    [
      "Orlando, United States",
      "America/New_York"
    ],
    [
      "Nagarpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Neyagawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Gravatai, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Vaughan, Canada",
      "America/Toronto"
    ],
    [
      "Hachinohe, Japan",
      "Asia/Tokyo"
    ],
    [
      "Xiantao, China",
      "Asia/Shanghai"
    ],
    [
      "Halle Neustadt, Germany",
      "Europe/Berlin"
    ],
    [
      "Fuji, Japan",
      "Asia/Tokyo"
    ],
    [
      "Lankaran, Azerbaijan",
      "Asia/Baku"
    ],
    [
      "Buenaventura, Colombia",
      "America/Bogota"
    ],
    [
      "Anantapur, India",
      "Asia/Kolkata"
    ],
    [
      "Takasaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sancaktepe, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Farrukhabad, India",
      "Asia/Kolkata"
    ],
    [
      "Aswan, Egypt",
      "Africa/Cairo"
    ],
    [
      "Tehuacan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Novorossiysk, Russia",
      "Europe/Moscow"
    ],
    [
      "Neuquen, Argentina",
      "America/Argentina/Salta"
    ],
    [
      "Yibin, China",
      "Asia/Shanghai"
    ],
    [
      "Gatineau, Canada",
      "America/Toronto"
    ],
    [
      "Ojo de Agua, Mexico",
      "America/Mexico_City"
    ],
    [
      "Berbera, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Deir ez-Zor, Syria",
      "Asia/Damascus"
    ],
    [
      "Bhatinda, India",
      "Asia/Kolkata"
    ],
    [
      "Norfolk, United States",
      "America/New_York"
    ],
    [
      "Hapur, India",
      "Asia/Kolkata"
    ],
    [
      "Mar'ino, Russia",
      "Europe/Moscow"
    ],
    [
      "Angarsk, Russia",
      "Asia/Irkutsk"
    ],
    [
      "Wonju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Kunsan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Santa Luzia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Louisville, United States",
      "America/Kentucky/Louisville"
    ],
    [
      "Chula Vista, United States",
      "America/Los_Angeles"
    ],
    [
      "Manisa, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Jessore, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Reading, United Kingdom",
      "Europe/London"
    ],
    [
      "Trabzon, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Puente de Vallecas, Spain",
      "Europe/Madrid"
    ],
    [
      "Baruta, Venezuela",
      "America/Caracas"
    ],
    [
      "Bihar, India",
      "Asia/Kolkata"
    ],
    [
      "Bago, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Hebi, China",
      "Asia/Shanghai"
    ],
    [
      "Braunschweig, Germany",
      "Europe/Berlin"
    ],
    [
      "Saint Petersburg, United States",
      "America/New_York"
    ],
    [
      "Gorgan, Iran",
      "Asia/Tehran"
    ],
    [
      "Nizhnevartovsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Ji'an, China",
      "Asia/Shanghai"
    ],
    [
      "Nicolas Romero, Mexico",
      "America/Mexico_City"
    ],
    [
      "Juliaca, Peru",
      "America/Lima"
    ],
    [
      "Shimonoseki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Mau, India",
      "Asia/Kolkata"
    ],
    [
      "A Coruna, Spain",
      "Europe/Madrid"
    ],
    [
      "Southampton, United Kingdom",
      "Europe/London"
    ],
    [
      "Rizhao, China",
      "Asia/Shanghai"
    ],
    [
      "Mito, Japan",
      "Asia/Tokyo"
    ],
    [
      "San Cristobal, Venezuela",
      "America/Caracas"
    ],
    [
      "Nottingham, United Kingdom",
      "Europe/London"
    ],
    [
      "Vanderbijlpark, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Orsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Ica, Peru",
      "America/Lima"
    ],
    [
      "Chemnitz, Germany",
      "Europe/Berlin"
    ],
    [
      "Udon Thani, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Plymouth, United Kingdom",
      "Europe/London"
    ],
    [
      "Saugor, India",
      "Asia/Kolkata"
    ],
    [
      "Jersey City, United States",
      "America/New_York"
    ],
    [
      "Bukhara, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Palmira, Colombia",
      "America/Bogota"
    ],
    [
      "Oshawa, Canada",
      "America/Toronto"
    ],
    [
      "Tiruvottiyur, India",
      "Asia/Kolkata"
    ],
    [
      "Czestochowa, Poland",
      "Europe/Warsaw"
    ],
    [
      "Jimeta, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Montpellier, France",
      "Europe/Paris"
    ],
    [
      "Dniprodzerzhyns'k, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Fukui-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Santa Maria, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kirovohrad, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Volta Redonda, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Porto, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Varzea Grande, Brazil",
      "America/Cuiaba"
    ],
    [
      "San Bernardo, Chile",
      "America/Santiago"
    ],
    [
      "Port-de-Paix, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Tel Aviv, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Colonia del Valle, Mexico",
      "America/Mexico_City"
    ],
    [
      "Nis, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Praia Grande, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Avadi, India",
      "Asia/Kolkata"
    ],
    [
      "Altona, Germany",
      "Europe/Berlin"
    ],
    [
      "Gombe, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Libertad, Philippines",
      "Asia/Manila"
    ],
    [
      "Iwo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Santa Clara, Cuba",
      "America/Havana"
    ],
    [
      "Sonipat, India",
      "Asia/Kolkata"
    ],
    [
      "Wafangdian, China",
      "Asia/Shanghai"
    ],
    [
      "Banda Aceh, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Tirupati, India",
      "Asia/Kolkata"
    ],
    [
      "Governador Valadares, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Morogoro, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Los Reyes La Paz, Mexico",
      "America/Mexico_City"
    ],
    [
      "San Fernando, Philippines",
      "Asia/Manila"
    ],
    [
      "Nanyang, China",
      "Asia/Shanghai"
    ],
    [
      "Taubate, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Santiago de Surco, Peru",
      "America/Lima"
    ],
    [
      "Qarchak, Iran",
      "Asia/Tehran"
    ],
    [
      "Liupanshui, China",
      "Asia/Shanghai"
    ],
    [
      "Eimsbuettel, Germany",
      "Europe/Berlin"
    ],
    [
      "Borujerd, Iran",
      "Asia/Tehran"
    ],
    [
      "Barueri, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Suihua, China",
      "Asia/Shanghai"
    ],
    [
      "Floridablanca, Colombia",
      "America/Bogota"
    ],
    [
      "Dire Dawa, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Thies Nones, Senegal",
      "Africa/Dakar"
    ],
    [
      "El Fasher, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Wolverhampton, United Kingdom",
      "Europe/London"
    ],
    [
      "Talcahuano, Chile",
      "America/Santiago"
    ],
    [
      "Richards Bay, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Laohekou, China",
      "Asia/Shanghai"
    ],
    [
      "Vitoria da Conquista, Brazil",
      "America/Bahia"
    ],
    [
      "Naihati, India",
      "Asia/Kolkata"
    ],
    [
      "Carabanchel, Spain",
      "Europe/Madrid"
    ],
    [
      "Fort Wayne, United States",
      "America/Indiana/Indianapolis"
    ],
    [
      "Gdynia, Poland",
      "Europe/Warsaw"
    ],
    [
      "Cox's Bazar, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Novo Hamburgo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Cirebon, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Santa Catarina, Mexico",
      "America/Monterrey"
    ],
    [
      "Yamagata, Japan",
      "Asia/Tokyo"
    ],
    [
      "Heze, China",
      "Asia/Shanghai"
    ],
    [
      "Ikot Ekpene, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Laochenglu, China",
      "Asia/Urumqi"
    ],
    [
      "Soledad de Graciano Sanchez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Rivne, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Durg, India",
      "Asia/Kolkata"
    ],
    [
      "Sari, Iran",
      "Asia/Tehran"
    ],
    [
      "Osh City, Kyrgyzstan",
      "Asia/Bishkek"
    ],
    [
      "Tarsus, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Dzerzhinsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Ensenada, Mexico",
      "America/Tijuana"
    ],
    [
      "Bratsk, Russia",
      "Asia/Irkutsk"
    ],
    [
      "Latina, Spain",
      "Europe/Madrid"
    ],
    [
      "Espoo, Finland",
      "Europe/Helsinki"
    ],
    [
      "Chimoio, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Ondo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "L'Hospitalet de Llobregat, Spain",
      "Europe/Madrid"
    ],
    [
      "Cascavel, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Etawah, India",
      "Asia/Kolkata"
    ],
    [
      "Rio Branco, Brazil",
      "America/Rio_Branco"
    ],
    [
      "Henderson, United States",
      "America/Los_Angeles"
    ],
    [
      "Satna, India",
      "Asia/Kolkata"
    ],
    [
      "Cumana, Venezuela",
      "America/Caracas"
    ],
    [
      "Pekalongan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Al Mukalla, Yemen",
      "Asia/Aden"
    ],
    [
      "Ciudad Obregon, Mexico",
      "America/Hermosillo"
    ],
    [
      "Lincoln, United States",
      "America/Chicago"
    ],
    [
      "Najran, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Popayan, Colombia",
      "America/Bogota"
    ],
    [
      "Jining, China",
      "Asia/Shanghai"
    ],
    [
      "Jiujiang, China",
      "Asia/Shanghai"
    ],
    [
      "Gajuwaka, India",
      "Asia/Kolkata"
    ],
    [
      "Hiratsuka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Augsburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Can Tho, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Plano, United States",
      "America/Chicago"
    ],
    [
      "Nakuru, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Aral, China",
      "Asia/Shanghai"
    ],
    [
      "Baranagar, India",
      "Asia/Kolkata"
    ],
    [
      "Stoke-on-Trent, United Kingdom",
      "Europe/London"
    ],
    [
      "Uberaba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Tongliao, China",
      "Asia/Shanghai"
    ],
    [
      "Sincelejo, Colombia",
      "America/Bogota"
    ],
    [
      "Dewas, India",
      "Asia/Kolkata"
    ],
    [
      "Buffalo, United States",
      "America/New_York"
    ],
    [
      "Malmoe, Sweden",
      "Europe/Stockholm"
    ],
    [
      "Markham, Canada",
      "America/Toronto"
    ],
    [
      "Moenchengladbach, Germany",
      "Europe/Berlin"
    ],
    [
      "Lal Bahadur Nagar, India",
      "Asia/Kolkata"
    ],
    [
      "Jalna, India",
      "Asia/Kolkata"
    ],
    [
      "Parana, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Aqtobe, Kazakhstan",
      "Asia/Aqtobe"
    ],
    [
      "Eixample, Spain",
      "Europe/Madrid"
    ],
    [
      "Witbank, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Oaxaca de Juarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Sivas, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Mianyang, China",
      "Asia/Shanghai"
    ],
    [
      "Umuahia, Nigeria",
      "Africa/Lagos"
    ],
    [
      "El Daein, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Petrozavodsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Mantampay, Philippines",
      "Asia/Manila"
    ],
    [
      "Sumqayit, Azerbaijan",
      "Asia/Baku"
    ],
    [
      "Aachen, Germany",
      "Europe/Berlin"
    ],
    [
      "Aizawl, India",
      "Asia/Kolkata"
    ],
    [
      "Hulan Ergi, China",
      "Asia/Shanghai"
    ],
    [
      "Wuzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Chengzhong, China",
      "Asia/Shanghai"
    ],
    [
      "Ha'il, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Sterlitamak, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Haifa, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Tokushima, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kafr ad Dawwar, Egypt",
      "Africa/Cairo"
    ],
    [
      "Tshikapa, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Windhoek, Namibia",
      "Africa/Windhoek"
    ],
    [
      "Russeifa, Jordan",
      "Asia/Amman"
    ],
    [
      "Moppo, South Korea",
      "Asia/Seoul"
    ],
    [
      "Greensboro, United States",
      "America/New_York"
    ],
    [
      "Ciudad Victoria, Mexico",
      "America/Monterrey"
    ],
    [
      "Gelsenkirchen, Germany",
      "Europe/Berlin"
    ],
    [
      "Muenster, Germany",
      "Europe/Berlin"
    ],
    [
      "San Pedro, Philippines",
      "Asia/Manila"
    ],
    [
      "Linyi, China",
      "Asia/Shanghai"
    ],
    [
      "Bijapur, India",
      "Asia/Kolkata"
    ],
    [
      "Tasikmalaya, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Sector 5, Romania",
      "Europe/Bucharest"
    ],
    [
      "Kakogawacho-honmachi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ljubljana, Slovenia",
      "Europe/Ljubljana"
    ],
    [
      "Kashan, Iran",
      "Asia/Tehran"
    ],
    [
      "Monteria, Colombia",
      "America/Bogota"
    ],
    [
      "Wiesbaden, Germany",
      "Europe/Berlin"
    ],
    [
      "Ar Rayyan, Qatar",
      "Asia/Qatar"
    ],
    [
      "Petropolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Baguio, Philippines",
      "Asia/Manila"
    ],
    [
      "Nal'chik, Russia",
      "Europe/Moscow"
    ],
    [
      "Guantanamo, Cuba",
      "America/Havana"
    ],
    [
      "Herat, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Yao, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ibaraki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ichalkaranji, India",
      "Asia/Kolkata"
    ],
    [
      "Ramadi, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Kashgar, China",
      "Asia/Shanghai"
    ],
    [
      "Belfast, United Kingdom",
      "Europe/London"
    ],
    [
      "Strasbourg, France",
      "Europe/Paris"
    ],
    [
      "Caucaia, Brazil",
      "America/Fortaleza"
    ],
    [
      "Mokolo, Cameroon",
      "Africa/Douala"
    ],
    [
      "Bab Ezzouar, Algeria",
      "Africa/Algiers"
    ],
    [
      "Hakodate, Japan",
      "Asia/Tokyo"
    ],
    [
      "Komsomolsk-on-Amur, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Brasov, Romania",
      "Europe/Bucharest"
    ],
    [
      "Sukabumi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bahia Blanca, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Owo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Cuenca, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Newark, United States",
      "America/New_York"
    ],
    [
      "Nantes, France",
      "Europe/Paris"
    ],
    [
      "Sfax, Tunisia",
      "Africa/Tunis"
    ],
    [
      "Khomeyni Shahr, Iran",
      "Asia/Tehran"
    ],
    [
      "Bari, Italy",
      "Europe/Rome"
    ],
    [
      "Gijon, Spain",
      "Europe/Madrid"
    ],
    [
      "Kostroma, Russia",
      "Europe/Moscow"
    ],
    [
      "Ilesa, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Windsor, Canada",
      "America/Toronto"
    ],
    [
      "Horlivka, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Santa Teresa, Venezuela",
      "America/Caracas"
    ],
    [
      "Taganrog, Russia",
      "Europe/Moscow"
    ],
    [
      "Yoshkar-Ola, Russia",
      "Europe/Moscow"
    ],
    [
      "Effon Alaiye, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Mingora, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Hamburg-Nord, Germany",
      "Europe/Berlin"
    ],
    [
      "Tacna, Peru",
      "America/Lima"
    ],
    [
      "Ichinomiya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Chuzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Tepic, Mexico",
      "America/Mazatlan"
    ],
    [
      "Batna, Algeria",
      "Africa/Algiers"
    ],
    [
      "Narsingdi, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Gebze, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Itaguei, Colombia",
      "America/Bogota"
    ],
    [
      "Zhytomyr, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Kupang, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Palu, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Valparaiso, Chile",
      "America/Santiago"
    ],
    [
      "Logan City, Australia",
      "Australia/Brisbane"
    ],
    [
      "Bilaspur, India",
      "Asia/Kolkata"
    ],
    [
      "Maebashi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Petionville, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Cainta, Philippines",
      "Asia/Manila"
    ],
    [
      "Alwar, India",
      "Asia/Kolkata"
    ],
    [
      "Suzano, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Nha Trang, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Iksan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Ichihara, Japan",
      "Asia/Tokyo"
    ],
    [
      "Port Moresby, Papua New Guinea",
      "Pacific/Port_Moresby"
    ],
    [
      "Karlsruhe, Germany",
      "Europe/Berlin"
    ],
    [
      "Dihok, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Alto Barinas, Venezuela",
      "America/Caracas"
    ],
    [
      "Ismailia, Egypt",
      "Africa/Cairo"
    ],
    [
      "Kuala Terengganu, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Saint Paul, United States",
      "America/Chicago"
    ],
    [
      "Zagazig, Egypt",
      "Africa/Cairo"
    ],
    [
      "Viamao, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Sultanbeyli, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Adapazari, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Marienthal, Germany",
      "Europe/Berlin"
    ],
    [
      "Darbhanga, India",
      "Asia/Kolkata"
    ],
    [
      "Toledo, United States",
      "America/New_York"
    ],
    [
      "Hue, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Sector 4, Romania",
      "Europe/Bucharest"
    ],
    [
      "Sinuiju, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Safi, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Setif, Algeria",
      "Africa/Algiers"
    ],
    [
      "Ironville, United States",
      "America/New_York"
    ],
    [
      "Meads, United States",
      "America/New_York"
    ],
    [
      "Tsuen Wan, Hong Kong",
      "Asia/Hong_Kong"
    ],
    [
      "Zeytinburnu, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Huizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Beihai, China",
      "Asia/Shanghai"
    ],
    [
      "Victoria, Canada",
      "America/Vancouver"
    ],
    [
      "Parbhani, India",
      "Asia/Kolkata"
    ],
    [
      "Limeira, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Al Hillah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Paulista, Brazil",
      "America/Recife"
    ],
    [
      "Xiuying, China",
      "Asia/Shanghai"
    ],
    [
      "Utrecht, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Kasur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Bafoussam, Cameroon",
      "Africa/Douala"
    ],
    [
      "Al Mubarraz, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Catania, Italy",
      "Europe/Rome"
    ],
    [
      "Tambov, Russia",
      "Europe/Moscow"
    ],
    [
      "Gumi, South Korea",
      "Asia/Seoul"
    ],
    [
      "Mueang Nonthaburi, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Mbeya, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Stockton, United States",
      "America/Los_Angeles"
    ],
    [
      "Anchorage, United States",
      "America/Anchorage"
    ],
    [
      "Bialystok, Poland",
      "Europe/Warsaw"
    ],
    [
      "Minna, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Ponta Grossa, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Wollongong, Australia",
      "Australia/Sydney"
    ],
    [
      "Makurdi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Semey, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Panipat, India",
      "Asia/Kolkata"
    ],
    [
      "Kakinada, India",
      "Asia/Kolkata"
    ],
    [
      "Al Hufuf, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Foz do Iguacu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Greater Noida, India",
      "Asia/Kolkata"
    ],
    [
      "Noida, India",
      "Asia/Kolkata"
    ],
    [
      "Blumenau, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Galati, Romania",
      "Europe/Bucharest"
    ],
    [
      "Fukushima, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sumy, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Vina del Mar, Chile",
      "America/Santiago"
    ],
    [
      "Morioka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Yeosu, South Korea",
      "Asia/Seoul"
    ],
    [
      "Lexington-Fayette, United States",
      "America/New_York"
    ],
    [
      "Yokkaichi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Rampur, India",
      "Asia/Kolkata"
    ],
    [
      "Hisar, India",
      "Asia/Kolkata"
    ],
    [
      "Cincinnati, United States",
      "America/New_York"
    ],
    [
      "Bali, India",
      "Asia/Kolkata"
    ],
    [
      "Akashi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tampico, Mexico",
      "America/Monterrey"
    ],
    [
      "Vigo, Spain",
      "Europe/Madrid"
    ],
    [
      "Cherkasy, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Okanagan, Canada",
      "America/Vancouver"
    ],
    [
      "Elazig, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Barasat, India",
      "Asia/Kolkata"
    ],
    [
      "Otsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Aomorishi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jember, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kasugai, Japan",
      "Asia/Tokyo"
    ],
    [
      "Santol, Philippines",
      "Asia/Manila"
    ],
    [
      "Bradford, United Kingdom",
      "Europe/London"
    ],
    [
      "Angeles City, Philippines",
      "Asia/Manila"
    ],
    [
      "Yangshuo, China",
      "Asia/Shanghai"
    ],
    [
      "Mandu, India",
      "Asia/Kolkata"
    ],
    [
      "Kyzylorda, Kazakhstan",
      "Asia/Qyzylorda"
    ],
    [
      "Kyzyl-Orda, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "George Town, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Malir Cantonment, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Juba, South Sudan",
      "Africa/Juba"
    ],
    [
      "Batikent, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Merida, Venezuela",
      "America/Caracas"
    ],
    [
      "Surgut, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Mardan, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Brest, Belarus",
      "Europe/Minsk"
    ],
    [
      "Naha, Japan",
      "Asia/Tokyo"
    ],
    [
      "Gujrat, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Barddhaman, India",
      "Asia/Kolkata"
    ],
    [
      "Cardiff, United Kingdom",
      "Europe/London"
    ],
    [
      "Hull, United Kingdom",
      "Europe/London"
    ],
    [
      "Mazar-e Sharif, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Saransk, Russia",
      "Europe/Moscow"
    ],
    [
      "Constanta, Romania",
      "Europe/Bucharest"
    ],
    [
      "Riverside, United States",
      "America/Los_Angeles"
    ],
    [
      "Craiova, Romania",
      "Europe/Bucharest"
    ],
    [
      "Rajahmundry, India",
      "Asia/Kolkata"
    ],
    [
      "Franca, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Corpus Christi, United States",
      "America/Chicago"
    ],
    [
      "Kulti, India",
      "Asia/Kolkata"
    ],
    [
      "Nizamabad, India",
      "Asia/Kolkata"
    ],
    [
      "Mandaluyong City, Philippines",
      "Asia/Manila"
    ],
    [
      "Brakpan, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Pittsburgh, United States",
      "America/New_York"
    ],
    [
      "San Salvador de Jujuy, Argentina",
      "America/Argentina/Jujuy"
    ],
    [
      "Celaya, Mexico",
      "America/Mexico_City"
    ],
    [
      "Porto Velho, Brazil",
      "America/Porto_Velho"
    ],
    [
      "Al Fayyum, Egypt",
      "Africa/Cairo"
    ],
    [
      "Firozabad, India",
      "Asia/Kolkata"
    ],
    [
      "Shengli, China",
      "Asia/Shanghai"
    ],
    [
      "Tawau, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Chinju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Tumkur, India",
      "Asia/Kolkata"
    ],
    [
      "Irbid, Jordan",
      "Asia/Amman"
    ],
    [
      "Chernihiv, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Mannheim, Germany",
      "Europe/Berlin"
    ],
    [
      "Biskra, Algeria",
      "Africa/Algiers"
    ],
    [
      "General Escobedo, Mexico",
      "America/Monterrey"
    ],
    [
      "Valledupar, Colombia",
      "America/Bogota"
    ],
    [
      "Newcastle, Australia",
      "Australia/Sydney"
    ],
    [
      "Coventry, United Kingdom",
      "Europe/London"
    ],
    [
      "Chita, Russia",
      "Asia/Yakutsk"
    ],
    [
      "Tampico, Mexico",
      "America/Monterrey"
    ],
    [
      "Butuan, Philippines",
      "Asia/Manila"
    ],
    [
      "Bengkulu, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Botshabelo, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Antofagasta, Chile",
      "America/Santiago"
    ],
    [
      "Vladimir, Russia",
      "Europe/Moscow"
    ],
    [
      "Sariwon, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Guaruja, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jingdezhen, China",
      "Asia/Shanghai"
    ],
    [
      "Pucallpa, Peru",
      "America/Lima"
    ],
    [
      "Percut, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Miyazaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Maringa, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Cusco, Peru",
      "America/Lima"
    ],
    [
      "Iligan City, Philippines",
      "Asia/Manila"
    ],
    [
      "Wusong, China",
      "Asia/Shanghai"
    ],
    [
      "Vitoria, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Varna, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Ostrava, Czech Republic",
      "Europe/Prague"
    ],
    [
      "Bonn, Germany",
      "Europe/Berlin"
    ],
    [
      "Ikeja, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Denizli, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Lianshan, China",
      "Asia/Shanghai"
    ],
    [
      "Ganja, Azerbaijan",
      "Asia/Baku"
    ],
    [
      "Coacalco, Mexico",
      "America/Mexico_City"
    ],
    [
      "Soacha, Colombia",
      "America/Bogota"
    ],
    [
      "Sisli, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Vologda, Russia",
      "Europe/Moscow"
    ],
    [
      "Timisoara, Romania",
      "Europe/Bucharest"
    ],
    [
      "Al Kut, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Armenia, Colombia",
      "America/Bogota"
    ],
    [
      "Cherepovets, Russia",
      "Europe/Moscow"
    ],
    [
      "Bauchi, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Calamba, Philippines",
      "Asia/Manila"
    ],
    [
      "Cluj-Napoca, Romania",
      "Europe/Bucharest"
    ],
    [
      "Chimbote, Peru",
      "America/Lima"
    ],
    [
      "Baicheng, China",
      "Asia/Shanghai"
    ],
    [
      "Rohtak, India",
      "Asia/Kolkata"
    ],
    [
      "Katowice, Poland",
      "Europe/Warsaw"
    ],
    [
      "Hrodna, Belarus",
      "Europe/Minsk"
    ],
    [
      "Vladikavkaz, Russia",
      "Europe/Moscow"
    ],
    [
      "Koshigaya, Japan",
      "Asia/Tokyo"
    ],
    [
      "New Delhi, India",
      "Asia/Kolkata"
    ],
    [
      "Poltava, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Valladolid, Spain",
      "Europe/Madrid"
    ],
    [
      "Iasi, Romania",
      "Europe/Bucharest"
    ],
    [
      "Andijon, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Mataram, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Shangrao, China",
      "Asia/Shanghai"
    ],
    [
      "Ad Diwaniyah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Ust-Kamenogorsk, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Holguin, Cuba",
      "America/Havana"
    ],
    [
      "Islington, United Kingdom",
      "Europe/London"
    ],
    [
      "Murmansk, Russia",
      "Europe/Moscow"
    ],
    [
      "St. Louis, United States",
      "America/Chicago"
    ],
    [
      "Samarqand, Uzbekistan",
      "Asia/Samarkand"
    ],
    [
      "Shimoga, India",
      "Asia/Kolkata"
    ],
    [
      "Pachuca de Soto, Mexico",
      "America/Mexico_City"
    ],
    [
      "Anapolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Moron, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Maroua, Cameroon",
      "Africa/Douala"
    ],
    [
      "Akita, Japan",
      "Asia/Tokyo"
    ],
    [
      "Shahjanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Kherson, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Pelotas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ciudad del Este, Paraguay",
      "America/Asuncion"
    ],
    [
      "Smolensk, Russia",
      "Europe/Moscow"
    ],
    [
      "San Miguelito, Panama",
      "America/Panama"
    ],
    [
      "Jundiai, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Villavicencio, Colombia",
      "America/Bogota"
    ],
    [
      "Volzhskiy, Russia",
      "Europe/Volgograd"
    ],
    [
      "Al `Amarah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Posadas, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Suizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Orel, Russia",
      "Europe/Moscow"
    ],
    [
      "Sao Vicente, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Santa Ana, United States",
      "America/Los_Angeles"
    ],
    [
      "Brahmapur, India",
      "Asia/Kolkata"
    ],
    [
      "Aurora, United States",
      "America/Denver"
    ],
    [
      "Trichur, India",
      "Asia/Kolkata"
    ],
    [
      "Piura, Peru",
      "America/Lima"
    ],
    [
      "Toyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Mogi das Cruzes, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Akitashi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tetouan, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Bhilwara, India",
      "Asia/Kolkata"
    ],
    [
      "Yanji, China",
      "Asia/Shanghai"
    ],
    [
      "Chongjin, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Sochi, Russia",
      "Europe/Moscow"
    ],
    [
      "Canoas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Chanda, India",
      "Asia/Kolkata"
    ],
    [
      "Cordoba, Spain",
      "Europe/Madrid"
    ],
    [
      "Pavlodar, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Wonsan, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Patiala, India",
      "Asia/Kolkata"
    ],
    [
      "Soyapango, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Khorramabad, Iran",
      "Asia/Tehran"
    ],
    [
      "Mathura, India",
      "Asia/Kolkata"
    ],
    [
      "Khorramshahr, Iran",
      "Asia/Tehran"
    ],
    [
      "Mandaue City, Philippines",
      "Asia/Manila"
    ],
    [
      "Bujumbura, Burundi",
      "Africa/Bujumbura"
    ],
    [
      "Bielefeld, Germany",
      "Europe/Berlin"
    ],
    [
      "Montes Claros, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jincheng, China",
      "Asia/Shanghai"
    ],
    [
      "Wad Medani, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Kamarhati, India",
      "Asia/Kolkata"
    ],
    [
      "Muzaffarpur, India",
      "Asia/Kolkata"
    ],
    [
      "Qazvin, Iran",
      "Asia/Tehran"
    ],
    [
      "Tieling, China",
      "Asia/Shanghai"
    ],
    [
      "Takamatsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Alicante, Spain",
      "Europe/Madrid"
    ],
    [
      "San Jose, Costa Rica",
      "America/Costa_Rica"
    ],
    [
      "Bauru, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kochi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Tampa, United States",
      "America/New_York"
    ],
    [
      "Anaheim, United States",
      "America/Los_Angeles"
    ],
    [
      "Itaquaquecetuba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bellary, India",
      "Asia/Kolkata"
    ],
    [
      "Krasnogvargeisky, Russia",
      "Europe/Moscow"
    ],
    [
      "Tungi, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Kawagoe, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ciudad Bolivar, Venezuela",
      "America/Caracas"
    ],
    [
      "Kaesong, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Nice, France",
      "Europe/Paris"
    ],
    [
      "West Raleigh, United States",
      "America/New_York"
    ],
    [
      "Macapa, Brazil",
      "America/Belem"
    ],
    [
      "Kaluga, Russia",
      "Europe/Moscow"
    ],
    [
      "Corrientes, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Leicester, United Kingdom",
      "Europe/London"
    ],
    [
      "Tokorozawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Irapuato, Mexico",
      "America/Mexico_City"
    ],
    [
      "Yingbazha, China",
      "Asia/Shanghai"
    ],
    [
      "Latakia, Syria",
      "Asia/Damascus"
    ],
    [
      "Kashiwa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Plovdiv, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Koriyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ambattur, India",
      "Asia/Kolkata"
    ],
    [
      "Arusha, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Jhang Sadr, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Kukatpalli, India",
      "Asia/Kolkata"
    ],
    [
      "Zurich, Switzerland",
      "Europe/Zurich"
    ],
    [
      "Piracicaba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Shiqi, China",
      "Asia/Shanghai"
    ],
    [
      "Soledad, Colombia",
      "America/Bogota"
    ],
    [
      "Vitebsk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Bhimbar, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Rangpur, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Kurgan, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Cuernavaca, Mexico",
      "America/Mexico_City"
    ],
    [
      "New Orleans, United States",
      "America/Chicago"
    ],
    [
      "Tlahuac, Mexico",
      "America/Mexico_City"
    ],
    [
      "Turmero, Venezuela",
      "America/Caracas"
    ],
    [
      "Doha, Qatar",
      "Asia/Qatar"
    ],
    [
      "Taihe, China",
      "Asia/Shanghai"
    ],
    [
      "Kosti, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Belgorod, Russia",
      "Europe/Moscow"
    ],
    [
      "Sector 2, Romania",
      "Europe/Bucharest"
    ],
    [
      "Astana, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Hungnam, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Chifeng, China",
      "Asia/Shanghai"
    ],
    [
      "London, Canada",
      "America/Toronto"
    ],
    [
      "Bakersfield, United States",
      "America/Los_Angeles"
    ],
    [
      "Camaguey, Cuba",
      "America/Havana"
    ],
    [
      "Etobicoke, Canada",
      "America/Toronto"
    ],
    [
      "Campina Grande, Brazil",
      "America/Fortaleza"
    ],
    [
      "Latur, India",
      "Asia/Kolkata"
    ],
    [
      "Sanandaj, Iran",
      "Asia/Tehran"
    ],
    [
      "Florence, Italy",
      "Europe/Rome"
    ],
    [
      "Nuevo Laredo, Mexico",
      "America/Matamoros"
    ],
    [
      "Muzaffarnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Punasa, India",
      "Asia/Kolkata"
    ],
    [
      "Diepsloot, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Lapu-Lapu City, Philippines",
      "Asia/Manila"
    ],
    [
      "Hualien City, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Wakayama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ixtapaluca, Mexico",
      "America/Mexico_City"
    ],
    [
      "Suita, Japan",
      "Asia/Tokyo"
    ],
    [
      "Anshun, China",
      "Asia/Shanghai"
    ],
    [
      "Apodaca, Mexico",
      "America/Monterrey"
    ],
    [
      "Vinnytsya, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Bandar Abbas, Iran",
      "Asia/Tehran"
    ],
    [
      "Okazaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Neiva, Colombia",
      "America/Bogota"
    ],
    [
      "Barinas, Venezuela",
      "America/Caracas"
    ],
    [
      "Miguel Hidalgo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Thessaloniki, Greece",
      "Europe/Athens"
    ],
    [
      "Takatsuki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Santiago del Estero, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Mazatlan, Mexico",
      "America/Mazatlan"
    ],
    [
      "Bilbao, Spain",
      "Europe/Madrid"
    ],
    [
      "Benito Juarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Samarinda, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Ambon, Indonesia",
      "Asia/Jayapura"
    ],
    [
      "Arkhangel'sk, Russia",
      "Europe/Moscow"
    ],
    [
      "Kimhae, South Korea",
      "Asia/Seoul"
    ],
    [
      "Asahikawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Bacoor, Philippines",
      "Asia/Manila"
    ],
    [
      "Iwaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Zanjan, Iran",
      "Asia/Tehran"
    ],
    [
      "Kwangmyong, South Korea",
      "Asia/Seoul"
    ],
    [
      "Manizales, Colombia",
      "America/Bogota"
    ],
    [
      "San Jose del Monte, Philippines",
      "Asia/Manila"
    ],
    [
      "Simferopol, Ukraine",
      "Europe/Simferopol"
    ],
    [
      "Taraz, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Anqing, China",
      "Asia/Shanghai"
    ],
    [
      "Halifax, Canada",
      "America/Halifax"
    ],
    [
      "Lublin, Poland",
      "Europe/Warsaw"
    ],
    [
      "Bobo-Dioulasso, Burkina Faso",
      "Africa/Ouagadougou"
    ],
    [
      "Nagano, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ulan-Ude, Russia",
      "Asia/Irkutsk"
    ],
    [
      "Tamale, Ghana",
      "Africa/Accra"
    ],
    [
      "Wuppertal, Germany",
      "Europe/Berlin"
    ],
    [
      "Carapicuiba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Sheikhupura, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Bhagalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Atasehir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Zhaoqing, China",
      "Asia/Shanghai"
    ],
    [
      "Manukau City, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Toyota, Japan",
      "Asia/Tokyo"
    ],
    [
      "Villahermosa, Mexico",
      "America/Mexico_City"
    ],
    [
      "Stavropol', Russia",
      "Europe/Moscow"
    ],
    [
      "Christchurch, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Al Qadarif, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Larkana, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Petare, Venezuela",
      "America/Caracas"
    ],
    [
      "Cheonan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Arlington, United States",
      "America/Chicago"
    ],
    [
      "San Miguel Xico Viejo, Mexico",
      "America/Mexico_City"
    ],
    [
      "Bologna, Italy",
      "Europe/Rome"
    ],
    [
      "Kuantan, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Bydgoszcz, Poland",
      "Europe/Warsaw"
    ],
    [
      "Kenitra, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Olinda, Brazil",
      "America/Recife"
    ],
    [
      "Dhulia, India",
      "Asia/Kolkata"
    ],
    [
      "Ahmadnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Nara-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Canberra, Australia",
      "Australia/Sydney"
    ],
    [
      "Sector 6, Romania",
      "Europe/Bucharest"
    ],
    [
      "Mahilyow, Belarus",
      "Europe/Minsk"
    ],
    [
      "Brno, Czech Republic",
      "Europe/Prague"
    ],
    [
      "Fenghuang, China",
      "Asia/Shanghai"
    ],
    [
      "Puerto La Cruz, Venezuela",
      "America/Caracas"
    ],
    [
      "Abadan, Iran",
      "Asia/Tehran"
    ],
    [
      "Honolulu, United States",
      "Pacific/Honolulu"
    ],
    [
      "Van, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Pingxiang, China",
      "Asia/Shanghai"
    ],
    [
      "Seremban, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Zhangjiakou Shi Xuanhua Qu, China",
      "Asia/Shanghai"
    ],
    [
      "Kaunas, Lithuania",
      "Europe/Vilnius"
    ],
    [
      "Sao Jose do Rio Preto, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Tirana, Albania",
      "Europe/Tirane"
    ],
    [
      "Minato, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kahramanmaras, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Putian, China",
      "Asia/Shanghai"
    ],
    [
      "Makiyivka, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Huancayo, Peru",
      "America/Lima"
    ],
    [
      "Laval, Canada",
      "America/Toronto"
    ],
    [
      "Zhoukou, China",
      "Asia/Shanghai"
    ],
    [
      "Toyohashi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Panihati, India",
      "Asia/Kolkata"
    ],
    [
      "Krugersdorp, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Sevastopol, Ukraine",
      "Europe/Simferopol"
    ],
    [
      "Dezhou, China",
      "Asia/Shanghai"
    ],
    [
      "Bochum-Hordel, Germany",
      "Europe/Berlin"
    ],
    [
      "Nizhniy Tagil, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Caxias do Sul, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Las Palmas de Gran Canaria, Spain",
      "Atlantic/Canary"
    ],
    [
      "Wellington, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Batman, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Pasto, Colombia",
      "America/Bogota"
    ],
    [
      "Wichita, United States",
      "America/Chicago"
    ],
    [
      "Minneapolis, United States",
      "America/Chicago"
    ],
    [
      "Delmas 73, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "N'dalatando, Angola",
      "Africa/Luanda"
    ],
    [
      "Fukuyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Betim, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Iztacalco, Mexico",
      "America/Mexico_City"
    ],
    [
      "Toyonaka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sector 3, Romania",
      "Europe/Bucharest"
    ],
    [
      "Bochum, Germany",
      "Europe/Berlin"
    ],
    [
      "Abomey-Calavi, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "Maua, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Misratah, Libya",
      "Africa/Tripoli"
    ],
    [
      "Resistencia, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Campos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Khamis Mushait, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Iloilo, Philippines",
      "Asia/Manila"
    ],
    [
      "Bissau, Guinea-Bissau",
      "Africa/Bissau"
    ],
    [
      "Nampula, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Samut Prakan, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Comilla, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Diadema, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Oakland, United States",
      "America/Los_Angeles"
    ],
    [
      "Kandahar, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Buraydah, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Tulsa, United States",
      "America/Chicago"
    ],
    [
      "Sandakan, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Xinpu, China",
      "Asia/Shanghai"
    ],
    [
      "Bello, Colombia",
      "America/Bogota"
    ],
    [
      "El Obeid, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Bamenda, Cameroon",
      "Africa/Douala"
    ],
    [
      "Tallinn, Estonia",
      "Europe/Tallinn"
    ],
    [
      "Samsun, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Serra, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Kollam, India",
      "Asia/Kolkata"
    ],
    [
      "Ndola, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Fujisawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Weifang, China",
      "Asia/Shanghai"
    ],
    [
      "Vila Velha, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Surrey, Canada",
      "America/Vancouver"
    ],
    [
      "Manchester, United Kingdom",
      "Europe/London"
    ],
    [
      "Al Hoceima, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Cleveland, United States",
      "America/New_York"
    ],
    [
      "Keelung, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Tiruppur, India",
      "Asia/Kolkata"
    ],
    [
      "Gifu-shi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Khmel'nyts'kyy, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Miami, United States",
      "America/New_York"
    ],
    [
      "Yangjiang, China",
      "Asia/Shanghai"
    ],
    [
      "Machida, Japan",
      "Asia/Tokyo"
    ],
    [
      "West Jerusalem, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Tver, Russia",
      "Europe/Moscow"
    ],
    [
      "An Nasiriyah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Kitwe, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Palma, Spain",
      "Europe/Madrid"
    ],
    [
      "Kassala, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Tonala, Mexico",
      "America/Mexico_City"
    ],
    [
      "Taoyuan City, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Zanzibar, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Jixi, China",
      "Asia/Shanghai"
    ],
    [
      "Raleigh, United States",
      "America/New_York"
    ],
    [
      "Hsinchu, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Nellore, India",
      "Asia/Kolkata"
    ],
    [
      "Xochimilco, Mexico",
      "America/Mexico_City"
    ],
    [
      "Newcastle, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Tanda, Egypt",
      "Africa/Cairo"
    ],
    [
      "Oujda, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Denpasar, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Hirakata, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ribeirao das Neves, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Villa Nueva, Guatemala",
      "America/Guatemala"
    ],
    [
      "Bien Hoa, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Szczecin, Poland",
      "Europe/Warsaw"
    ],
    [
      "Shiyan, China",
      "Asia/Shanghai"
    ],
    [
      "Panama, Panama",
      "America/Panama"
    ],
    [
      "Jeju City, South Korea",
      "Asia/Seoul"
    ],
    [
      "Al Ain, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Omaha, United States",
      "America/Chicago"
    ],
    [
      "Kursk, Russia",
      "Europe/Moscow"
    ],
    [
      "Gaza, Palestinian Territory",
      "Asia/Gaza"
    ],
    [
      "Chaoyang, China",
      "Asia/Shanghai"
    ],
    [
      "Nagasaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ardabil, Iran",
      "Asia/Tehran"
    ],
    [
      "Maturin, Venezuela",
      "America/Caracas"
    ],
    [
      "Santos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Wandsbek, Germany",
      "Europe/Berlin"
    ],
    [
      "Florianopolis, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jhansi, India",
      "Asia/Kolkata"
    ],
    [
      "Magnitogorsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Yangquan, China",
      "Asia/Shanghai"
    ],
    [
      "Shymkent, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Colorado Springs, United States",
      "America/Denver"
    ],
    [
      "Luohe, China",
      "Asia/Shanghai"
    ],
    [
      "Mangalore, India",
      "Asia/Kolkata"
    ],
    [
      "Sukkur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Auckland, New Zealand",
      "Pacific/Auckland"
    ],
    [
      "Kolwezi, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "San Juan, Puerto Rico",
      "America/Puerto_Rico"
    ],
    [
      "Bokaro, India",
      "Asia/Kolkata"
    ],
    [
      "Korba, India",
      "Asia/Kolkata"
    ],
    [
      "Atlanta, United States",
      "America/New_York"
    ],
    [
      "Al Mansurah, Egypt",
      "Africa/Cairo"
    ],
    [
      "Jambi City, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Asyut, Egypt",
      "Africa/Cairo"
    ],
    [
      "Akure, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Erzurum, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Ivanovo, Russia",
      "Europe/Moscow"
    ],
    [
      "Shaoxing, China",
      "Asia/Shanghai"
    ],
    [
      "Ibague, Colombia",
      "America/Bogota"
    ],
    [
      "Luxor, Egypt",
      "Africa/Cairo"
    ],
    [
      "Likasi, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Udaipur, India",
      "Asia/Kolkata"
    ],
    [
      "Gaya, India",
      "Asia/Kolkata"
    ],
    [
      "Bratislava, Slovakia",
      "Europe/Bratislava"
    ],
    [
      "Ado-Ekiti, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Chaozhou, China",
      "Asia/Shanghai"
    ],
    [
      "Barcelona, Venezuela",
      "America/Caracas"
    ],
    [
      "Xalapa de Enriquez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Azcapotzalco, Mexico",
      "America/Mexico_City"
    ],
    [
      "Maltepe, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Bryansk, Russia",
      "Europe/Moscow"
    ],
    [
      "Luqiao, China",
      "Asia/Shanghai"
    ],
    [
      "East Jerusalem, Palestinian Territory",
      "Asia/Hebron"
    ],
    [
      "Belgaum, India",
      "Asia/Kolkata"
    ],
    [
      "Akola, India",
      "Asia/Kolkata"
    ],
    [
      "Yokosuka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jalgaon, India",
      "Asia/Kolkata"
    ],
    [
      "Bristol, United Kingdom",
      "Europe/London"
    ],
    [
      "Al Mahallah al Kubra, Egypt",
      "Africa/Cairo"
    ],
    [
      "Santa Marta, Colombia",
      "America/Bogota"
    ],
    [
      "Welkom, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Katsina, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Namangan, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Toulouse, France",
      "Europe/Paris"
    ],
    [
      "Brampton, Canada",
      "America/Toronto"
    ],
    [
      "Balikpapan, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Ananindeua, Brazil",
      "America/Belem"
    ],
    [
      "Karbala, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Kaliningrad, Russia",
      "Europe/Kaliningrad"
    ],
    [
      "Malegaon, India",
      "Asia/Kolkata"
    ],
    [
      "Kousseri, Cameroon",
      "Africa/Douala"
    ],
    [
      "Edinburgh, United Kingdom",
      "Europe/London"
    ],
    [
      "Tirunelveli, India",
      "Asia/Kolkata"
    ],
    [
      "Bei'an, China",
      "Asia/Shanghai"
    ],
    [
      "Uyo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Mwanza, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Murcia, Spain",
      "Europe/Madrid"
    ],
    [
      "Garoua, Cameroon",
      "Africa/Douala"
    ],
    [
      "Sultangazi, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Kurashiki, Japan",
      "Asia/Tokyo"
    ],
    [
      "Iquitos, Peru",
      "America/Lima"
    ],
    [
      "Virginia Beach, United States",
      "America/New_York"
    ],
    [
      "Mawlamyine, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Mesa, United States",
      "America/Phoenix"
    ],
    [
      "Kozhikode, India",
      "Asia/Kolkata"
    ],
    [
      "Pereira, Colombia",
      "America/Bogota"
    ],
    [
      "Nangi, India",
      "Asia/Kolkata"
    ],
    [
      "Malatya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Dasmarinas, Philippines",
      "Asia/Manila"
    ],
    [
      "Shyamnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Carrefour, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Amagasaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "San Nicolas de los Garza, Mexico",
      "America/Monterrey"
    ],
    [
      "Matsuyama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Cagayan de Oro, Philippines",
      "Asia/Manila"
    ],
    [
      "Boksburg, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Cheboksary, Russia",
      "Europe/Moscow"
    ],
    [
      "Sheffield, United Kingdom",
      "Europe/London"
    ],
    [
      "San Juan, Argentina",
      "America/Argentina/San_Juan"
    ],
    [
      "Venustiano Carranza, Mexico",
      "America/Mexico_City"
    ],
    [
      "Oita, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jiangguanchi, China",
      "Asia/Shanghai"
    ],
    [
      "Chengde, China",
      "Asia/Shanghai"
    ],
    [
      "Sanliurfa, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Heroica Matamoros, Mexico",
      "America/Matamoros"
    ],
    [
      "Utsunomiya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Wenshan City, China",
      "Asia/Shanghai"
    ],
    [
      "Muratpasa, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Constantine, Algeria",
      "Africa/Algiers"
    ],
    [
      "Jining, China",
      "Asia/Shanghai"
    ],
    [
      "Karagandy, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Manado, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Luhansk, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Ramgundam, India",
      "Asia/Kolkata"
    ],
    [
      "Mansilingan, Philippines",
      "Asia/Manila"
    ],
    [
      "Sao Joao de Meriti, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Bacolod City, Philippines",
      "Asia/Manila"
    ],
    [
      "Namp'o, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Leeds, United Kingdom",
      "Europe/London"
    ],
    [
      "Pontianak, Indonesia",
      "Asia/Pontianak"
    ],
    [
      "Tabuk, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Hengshui, China",
      "Asia/Shanghai"
    ],
    [
      "Niteroi, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Victoria de Durango, Mexico",
      "America/Monterrey"
    ],
    [
      "Kota Kinabalu, Malaysia",
      "Asia/Kuching"
    ],
    [
      "Ujjain, India",
      "Asia/Kolkata"
    ],
    [
      "Kirov, Russia",
      "Europe/Volgograd"
    ],
    [
      "Zamboanga, Philippines",
      "Asia/Manila"
    ],
    [
      "Karabaglar, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Kanazawa, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kansas City, United States",
      "America/Chicago"
    ],
    [
      "Antwerpen, Belgium",
      "Europe/Brussels"
    ],
    [
      "Hamah, Syria",
      "Asia/Damascus"
    ],
    [
      "Joinville, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Dadukou, China",
      "Asia/Shanghai"
    ],
    [
      "Calabar, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Gdansk, Poland",
      "Europe/Warsaw"
    ],
    [
      "Long Beach, United States",
      "America/Los_Angeles"
    ],
    [
      "Xiangyang, China",
      "Asia/Shanghai"
    ],
    [
      "Bloemfontein, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Kananga, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Liaoyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Jammu, India",
      "Asia/Kolkata"
    ],
    [
      "Belford Roxo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jiaxing, China",
      "Asia/Shanghai"
    ],
    [
      "Zunyi, China",
      "Asia/Shanghai"
    ],
    [
      "Sacramento, United States",
      "America/Los_Angeles"
    ],
    [
      "Kawaguchi, Japan",
      "Asia/Tokyo"
    ],
    [
      "Staten Island, United States",
      "America/New_York"
    ],
    [
      "Tula, Russia",
      "Europe/Moscow"
    ],
    [
      "Nishinomiya-hama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Liverpool, United Kingdom",
      "Europe/London"
    ],
    [
      "Juiz de Fora, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Matsudo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jiaojiang, China",
      "Asia/Shanghai"
    ],
    [
      "Londrina, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Lyon, France",
      "Europe/Paris"
    ],
    [
      "Mixco, Guatemala",
      "America/Guatemala"
    ],
    [
      "The Hague, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Vereeniging, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Skopje, Macedonia",
      "Europe/Skopje"
    ],
    [
      "Yinchuan, China",
      "Asia/Shanghai"
    ],
    [
      "Cuautitlan Izcalli, Mexico",
      "America/Mexico_City"
    ],
    [
      "Hwaseong-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Yichang, China",
      "Asia/Shanghai"
    ],
    [
      "Kemerovo, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Sialkot, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Hargeysa, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Yazd, Iran",
      "Asia/Tehran"
    ],
    [
      "East London, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Uijeongbu-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Okene, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Gomel, Belarus",
      "Europe/Minsk"
    ],
    [
      "Tuxtla Gutierrez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Himeji, Japan",
      "Asia/Tokyo"
    ],
    [
      "Mariupol, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Shah Alam, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Feira de Santana, Brazil",
      "America/Bahia"
    ],
    [
      "Najaf, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Bhatpara, India",
      "Asia/Kolkata"
    ],
    [
      "Gulbarga, India",
      "Asia/Kolkata"
    ],
    [
      "Saharanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Masina, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Tomsk, Russia",
      "Asia/Novosibirsk"
    ],
    [
      "Dresden, Germany",
      "Europe/Berlin"
    ],
    [
      "Suez, Egypt",
      "Africa/Cairo"
    ],
    [
      "San Pedro Sula, Honduras",
      "America/Tegucigalpa"
    ],
    [
      "Santa Fe de la Vera Cruz, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Port Sudan, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Aracaju, Brazil",
      "America/Maceio"
    ],
    [
      "Jamnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Wuwei, China",
      "Asia/Shanghai"
    ],
    [
      "Tlaquepaque, Mexico",
      "America/Mexico_City"
    ],
    [
      "Cimahi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Fresno, United States",
      "America/Los_Angeles"
    ],
    [
      "Makhachkala, Russia",
      "Europe/Moscow"
    ],
    [
      "Reynosa, Mexico",
      "America/Matamoros"
    ],
    [
      "Shashi, China",
      "Asia/Shanghai"
    ],
    [
      "Nuernberg, Germany",
      "Europe/Berlin"
    ],
    [
      "Pohang, South Korea",
      "Asia/Seoul"
    ],
    [
      "Zhuhai, China",
      "Asia/Shanghai"
    ],
    [
      "Astrakhan, Russia",
      "Europe/Volgograd"
    ],
    [
      "Arak, Iran",
      "Asia/Tehran"
    ],
    [
      "Goeteborg, Sweden",
      "Europe/Stockholm"
    ],
    [
      "Asansol, India",
      "Asia/Kolkata"
    ],
    [
      "Duisburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Kalininskiy, Russia",
      "Europe/Moscow"
    ],
    [
      "Leipzig, Germany",
      "Europe/Berlin"
    ],
    [
      "Karol Bagh, India",
      "Asia/Kolkata"
    ],
    [
      "Niigata, Japan",
      "Asia/Tokyo"
    ],
    [
      "Toluca, Mexico",
      "America/Mexico_City"
    ],
    [
      "Wuhu, China",
      "Asia/Shanghai"
    ],
    [
      "Naberezhnyye Chelny, Russia",
      "Europe/Moscow"
    ],
    [
      "Makati City, Philippines",
      "Asia/Manila"
    ],
    [
      "Puente Alto, Chile",
      "America/Santiago"
    ],
    [
      "Aparecida de Goiania, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Mykolayiv, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Bilimora, India",
      "Asia/Kolkata"
    ],
    [
      "Tembisa, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Penza, Russia",
      "Europe/Moscow"
    ],
    [
      "Salta, Argentina",
      "America/Argentina/Salta"
    ],
    [
      "Azadshahr, Iran",
      "Asia/Tehran"
    ],
    [
      "Eskisehir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Hannover, Germany",
      "Europe/Berlin"
    ],
    [
      "Shiliguri, India",
      "Asia/Kolkata"
    ],
    [
      "Lipetsk, Russia",
      "Europe/Moscow"
    ],
    [
      "Kolhapur, India",
      "Asia/Kolkata"
    ],
    [
      "Ulhasnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Jiaozuo, China",
      "Asia/Shanghai"
    ],
    [
      "Changde, China",
      "Asia/Shanghai"
    ],
    [
      "Lisbon, Portugal",
      "Europe/Lisbon"
    ],
    [
      "Ajmer, India",
      "Asia/Kolkata"
    ],
    [
      "Quilmes, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Durgapur, India",
      "Asia/Kolkata"
    ],
    [
      "Tyumen, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Hamilton, Canada",
      "America/Toronto"
    ],
    [
      "Tucson, United States",
      "America/Phoenix"
    ],
    [
      "Ryazan', Russia",
      "Europe/Moscow"
    ],
    [
      "Esenler, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Bhayandar, India",
      "Asia/Kolkata"
    ],
    [
      "Macau, Macao",
      "Asia/Macau"
    ],
    [
      "Petaling Jaya, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Ciudad Lopez Mateos, Mexico",
      "America/Mexico_City"
    ],
    [
      "Cuauhtemoc, Mexico",
      "America/Mexico_City"
    ],
    [
      "Cuiaba, Brazil",
      "America/Cuiaba"
    ],
    [
      "Dehra Dun, India",
      "Asia/Kolkata"
    ],
    [
      "Torreon, Mexico",
      "America/Monterrey"
    ],
    [
      "Santa Maria Chimalhuacan, Mexico",
      "America/Mexico_City"
    ],
    [
      "San Salvador, El Salvador",
      "America/El_Salvador"
    ],
    [
      "Cangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Hamadan, Iran",
      "Asia/Tehran"
    ],
    [
      "Quebec, Canada",
      "America/Toronto"
    ],
    [
      "Touba, Senegal",
      "Africa/Dakar"
    ],
    [
      "Guntur, India",
      "Asia/Kolkata"
    ],
    [
      "Beira, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Ta'if, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Nashville, United States",
      "America/Chicago"
    ],
    [
      "Jiangmen, China",
      "Asia/Shanghai"
    ],
    [
      "Tanggu, China",
      "Asia/Shanghai"
    ],
    [
      "Ebute Ikorodu, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Guli, China",
      "Asia/Shanghai"
    ],
    [
      "Warri, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Mercin, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Port Said, Egypt",
      "Africa/Cairo"
    ],
    [
      "Kisangani, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Novokuznetsk, Russia",
      "Asia/Novokuznetsk"
    ],
    [
      "Yangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Cancun, Mexico",
      "America/Cancun"
    ],
    [
      "Vilnius, Lithuania",
      "Europe/Vilnius"
    ],
    [
      "Bangui, Central African Republic",
      "Africa/Bangui"
    ],
    [
      "Sargodha, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Banqiao, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Sharjah, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Meknes, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Albuquerque, United States",
      "America/Denver"
    ],
    [
      "Bremen, Germany",
      "Europe/Berlin"
    ],
    [
      "Neijiang, China",
      "Asia/Shanghai"
    ],
    [
      "Antipolo, Philippines",
      "Asia/Manila"
    ],
    [
      "Jiamusi, China",
      "Asia/Shanghai"
    ],
    [
      "Changwon, South Korea",
      "Asia/Seoul"
    ],
    [
      "Pristina, Kosovo",
      "Europe/Belgrade"
    ],
    [
      "Orenburg, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Nanded, India",
      "Asia/Kolkata"
    ],
    [
      "Aden, Yemen",
      "Asia/Aden"
    ],
    [
      "Zahedan, Iran",
      "Asia/Tehran"
    ],
    [
      "Bahawalpur, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Mar del Plata, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Bhavnagar, India",
      "Asia/Kolkata"
    ],
    [
      "Huai'an, China",
      "Asia/Shanghai"
    ],
    [
      "Surakarta, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kagoshima, Japan",
      "Asia/Tokyo"
    ],
    [
      "Siping, China",
      "Asia/Shanghai"
    ],
    [
      "Santiago de Cuba, Cuba",
      "America/Havana"
    ],
    [
      "Warangal, India",
      "Asia/Kolkata"
    ],
    [
      "Helsinki, Finland",
      "Europe/Helsinki"
    ],
    [
      "Sorocaba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Hamhung, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Honcho, Japan",
      "Asia/Tokyo"
    ],
    [
      "Onitsha, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Uberlandia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Sokoto, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Asmara, Eritrea",
      "Africa/Asmara"
    ],
    [
      "Bouake, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Malaga, Spain",
      "Europe/Madrid"
    ],
    [
      "Veracruz, Mexico",
      "America/Mexico_City"
    ],
    [
      "Poznan, Poland",
      "Europe/Warsaw"
    ],
    [
      "Kuching, Malaysia",
      "Asia/Kuching"
    ],
    [
      "South Boston, United States",
      "America/New_York"
    ],
    [
      "Bucaramanga, Colombia",
      "America/Bogota"
    ],
    [
      "Shihezi, China",
      "Asia/Urumqi"
    ],
    [
      "Banjarmasin, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Duesseldorf, Germany",
      "Europe/Berlin"
    ],
    [
      "Umraniye, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Bikaner, India",
      "Asia/Kolkata"
    ],
    [
      "Bengbu, China",
      "Asia/Shanghai"
    ],
    [
      "Bahcelievler, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Orumiyeh, Iran",
      "Asia/Tehran"
    ],
    [
      "Chiclayo, Peru",
      "America/Lima"
    ],
    [
      "Kerman, Iran",
      "Asia/Tehran"
    ],
    [
      "Libreville, Gabon",
      "Africa/Libreville"
    ],
    [
      "Khabarovsk Vtoroy, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Khabarovsk, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Hachioji, Japan",
      "Asia/Tokyo"
    ],
    [
      "Oklahoma City, United States",
      "America/Chicago"
    ],
    [
      "Cuttack, India",
      "Asia/Kolkata"
    ],
    [
      "Oslo, Norway",
      "Europe/Oslo"
    ],
    [
      "Genoa, Italy",
      "Europe/Rome"
    ],
    [
      "UEskuedar, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Las Vegas, United States",
      "America/Los_Angeles"
    ],
    [
      "Portland, United States",
      "America/Los_Angeles"
    ],
    [
      "New Kingston, Jamaica",
      "America/Jamaica"
    ],
    [
      "Blantyre, Malawi",
      "Africa/Blantyre"
    ],
    [
      "Irkutsk, Russia",
      "Asia/Irkutsk"
    ],
    [
      "Vladivostok, Russia",
      "Asia/Vladivostok"
    ],
    [
      "Dortmund, Germany",
      "Europe/Berlin"
    ],
    [
      "Stuttgart, Germany",
      "Europe/Berlin"
    ],
    [
      "Zhangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Abuja, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Yingkou, China",
      "Asia/Shanghai"
    ],
    [
      "Gold Coast, Australia",
      "Australia/Brisbane"
    ],
    [
      "Morelia, Mexico",
      "America/Mexico_City"
    ],
    [
      "Kayseri, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Essen, Germany",
      "Europe/Berlin"
    ],
    [
      "Abeokuta, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Rasht, Iran",
      "Asia/Tehran"
    ],
    [
      "Milwaukee, United States",
      "America/Chicago"
    ],
    [
      "Hermosillo, Mexico",
      "America/Hermosillo"
    ],
    [
      "Mexicali, Mexico",
      "America/Tijuana"
    ],
    [
      "Luancheng, China",
      "Asia/Shanghai"
    ],
    [
      "Rotterdam, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Barnaul, Russia",
      "Asia/Omsk"
    ],
    [
      "Vancouver, Canada",
      "America/Vancouver"
    ],
    [
      "Scarborough, Canada",
      "America/Toronto"
    ],
    [
      "Shuangyashan, China",
      "Asia/Shanghai"
    ],
    [
      "Situbondo, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Denver, United States",
      "America/Denver"
    ],
    [
      "Sangli, India",
      "Asia/Kolkata"
    ],
    [
      "Kirkuk, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Islamabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Washington, D.C., United States",
      "America/New_York"
    ],
    [
      "Haiphong, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Abu Dhabi, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Amravati, India",
      "Asia/Kolkata"
    ],
    [
      "Jinzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Cochin, India",
      "Asia/Kolkata"
    ],
    [
      "Hamamatsu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Benoni, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Yaroslavl, Russia",
      "Europe/Moscow"
    ],
    [
      "Tlalpan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Seattle, United States",
      "America/Los_Angeles"
    ],
    [
      "Borivli, India",
      "Asia/Kolkata"
    ],
    [
      "Glasgow, United Kingdom",
      "Europe/London"
    ],
    [
      "Xingtai, China",
      "Asia/Shanghai"
    ],
    [
      "Taizhou, China",
      "Asia/Shanghai"
    ],
    [
      "Sao Jose dos Campos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Ta`izz, Yemen",
      "Asia/Aden"
    ],
    [
      "Haikou, China",
      "Asia/Shanghai"
    ],
    [
      "Jamshedpur, India",
      "Asia/Kolkata"
    ],
    [
      "Pasig City, Philippines",
      "Asia/Manila"
    ],
    [
      "Boston, United States",
      "America/New_York"
    ],
    [
      "Al Hudaydah, Yemen",
      "Asia/Aden"
    ],
    [
      "Ribeirao Preto, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Baltimore, United States",
      "America/New_York"
    ],
    [
      "Kermanshah, Iran",
      "Asia/Tehran"
    ],
    [
      "Saltillo, Mexico",
      "America/Monterrey"
    ],
    [
      "Djibouti, Djibouti",
      "Africa/Djibouti"
    ],
    [
      "Panshan, China",
      "Asia/Shanghai"
    ],
    [
      "Bhilai, India",
      "Asia/Kolkata"
    ],
    [
      "Santiago de Queretaro, Mexico",
      "America/Mexico_City"
    ],
    [
      "Contagem, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Coyoacan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Yancheng, China",
      "Asia/Shanghai"
    ],
    [
      "Shaoguan, China",
      "Asia/Shanghai"
    ],
    [
      "Jaboatao dos Guararapes, Brazil",
      "America/Recife"
    ],
    [
      "Izhevsk, Russia",
      "Europe/Samara"
    ],
    [
      "Dandong, China",
      "Asia/Shanghai"
    ],
    [
      "Winnipeg, Canada",
      "America/Winnipeg"
    ],
    [
      "Zhenjiang, China",
      "Asia/Shanghai"
    ],
    [
      "Tebessa, Algeria",
      "Africa/Algiers"
    ],
    [
      "Anyang-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Cheongju-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Wroclaw, Poland",
      "Europe/Warsaw"
    ],
    [
      "Chisinau, Moldova",
      "Europe/Chisinau"
    ],
    [
      "North York, Canada",
      "America/Toronto"
    ],
    [
      "Yogyakarta, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Al Ahmadi, Kuwait",
      "Asia/Kuwait"
    ],
    [
      "Zhanjiang, China",
      "Asia/Urumqi"
    ],
    [
      "Okayama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kotli, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Ulyanovsk, Russia",
      "Europe/Moscow"
    ],
    [
      "New South Memphis, United States",
      "America/Chicago"
    ],
    [
      "Taguig, Philippines",
      "Asia/Manila"
    ],
    [
      "Diyarbakir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Oran, Algeria",
      "Africa/Algiers"
    ],
    [
      "Lilongwe, Malawi",
      "Africa/Blantyre"
    ],
    [
      "Memphis, United States",
      "America/Chicago"
    ],
    [
      "Colombo, Sri Lanka",
      "Asia/Colombo"
    ],
    [
      "Palermo, Italy",
      "Europe/Rome"
    ],
    [
      "El Paso, United States",
      "America/Denver"
    ],
    [
      "Guilin, China",
      "Asia/Shanghai"
    ],
    [
      "Krasnodar, Russia",
      "Europe/Moscow"
    ],
    [
      "Frankfurt am Main, Germany",
      "Europe/Berlin"
    ],
    [
      "Benghazi, Libya",
      "Africa/Tripoli"
    ],
    [
      "Ansan-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Joao Pessoa, Brazil",
      "America/Fortaleza"
    ],
    [
      "Acapulco de Juarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Kryvyi Rih, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Aguascalientes, Mexico",
      "America/Mexico_City"
    ],
    [
      "Pointe-Noire, Republic of the Congo",
      "Africa/Brazzaville"
    ],
    [
      "Nouakchott, Mauritania",
      "Africa/Nouakchott"
    ],
    [
      "Santo Andre, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Athens, Greece",
      "Europe/Athens"
    ],
    [
      "Mudanjiang, China",
      "Asia/Shanghai"
    ],
    [
      "Nantong, China",
      "Asia/Shanghai"
    ],
    [
      "Puyang Chengguanzhen, China",
      "Asia/Shanghai"
    ],
    [
      "Mississauga, Canada",
      "America/Toronto"
    ],
    [
      "Ipoh, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Xiangtan, China",
      "Asia/Shanghai"
    ],
    [
      "Gorakhpur, India",
      "Asia/Kolkata"
    ],
    [
      "Zaragoza, Spain",
      "Europe/Madrid"
    ],
    [
      "Culiacan, Mexico",
      "America/Mazatlan"
    ],
    [
      "Matola, Mozambique",
      "Africa/Maputo"
    ],
    [
      "San Luis Potosi, Mexico",
      "America/Mexico_City"
    ],
    [
      "Osasco, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Dushanbe, Tajikistan",
      "Asia/Dushanbe"
    ],
    [
      "General Santos, Philippines",
      "Asia/Manila"
    ],
    [
      "Raipur, India",
      "Asia/Kolkata"
    ],
    [
      "Kumamoto, Japan",
      "Asia/Tokyo"
    ],
    [
      "Liaoyang, China",
      "Asia/Shanghai"
    ],
    [
      "Huangshi, China",
      "Asia/Shanghai"
    ],
    [
      "Tangier, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Enugu, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Fuxin, China",
      "Asia/Shanghai"
    ],
    [
      "Zigong, China",
      "Asia/Shanghai"
    ],
    [
      "Zhangjiakou, China",
      "Asia/Shanghai"
    ],
    [
      "Tunis, Tunisia",
      "Africa/Tunis"
    ],
    [
      "La Plata, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Sarajevo, Bosnia and Herzegovina",
      "Europe/Sarajevo"
    ],
    [
      "Agadir, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Zagreb, Croatia",
      "Europe/Zagreb"
    ],
    [
      "Bulawayo, Zimbabwe",
      "Africa/Harare"
    ],
    [
      "Changzhi, China",
      "Asia/Shanghai"
    ],
    [
      "City of Balikpapan, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Rajshahi, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Santo Domingo Oeste, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Shizuoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jaboatao, Brazil",
      "America/Recife"
    ],
    [
      "Tol'yatti, Russia",
      "Europe/Samara"
    ],
    [
      "Sevilla, Spain",
      "Europe/Madrid"
    ],
    [
      "Pekanbaru, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bhiwandi, India",
      "Asia/Kolkata"
    ],
    [
      "Subang Jaya, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Zhuzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Jeonju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Edmonton, Canada",
      "America/Edmonton"
    ],
    [
      "Detroit, United States",
      "America/Detroit"
    ],
    [
      "Tlalnepantla, Mexico",
      "America/Mexico_City"
    ],
    [
      "Merida, Mexico",
      "America/Merida"
    ],
    [
      "Lviv, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Yantai, China",
      "Asia/Shanghai"
    ],
    [
      "Zhumadian, China",
      "Asia/Shanghai"
    ],
    [
      "Langfang, China",
      "Asia/Shanghai"
    ],
    [
      "N'Djamena, Chad",
      "Africa/Ndjamena"
    ],
    [
      "Moradabad, India",
      "Asia/Kolkata"
    ],
    [
      "Cucuta, Colombia",
      "America/Bogota"
    ],
    [
      "As Sulaymaniyah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Bagcilar, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Guadalupe, Mexico",
      "America/Monterrey"
    ],
    [
      "Muzaffarabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Alvaro Obregon, Mexico",
      "America/Mexico_City"
    ],
    [
      "Ashgabat, Turkmenistan",
      "Asia/Ashgabat"
    ],
    [
      "Campo Grande, Brazil",
      "America/Campo_Grande"
    ],
    [
      "Charlotte, United States",
      "America/New_York"
    ],
    [
      "Quetta, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Oyo, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Fort Worth, United States",
      "America/Chicago"
    ],
    [
      "Amsterdam, Netherlands",
      "Europe/Amsterdam"
    ],
    [
      "Riga, Latvia",
      "Europe/Riga"
    ],
    [
      "Hegang, China",
      "Asia/Shanghai"
    ],
    [
      "Sao Bernardo do Campo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Nangandao, China",
      "Asia/Shanghai"
    ],
    [
      "Teresina, Brazil",
      "America/Fortaleza"
    ],
    [
      "Kigali, Rwanda",
      "Africa/Kigali"
    ],
    [
      "Bareilly, India",
      "Asia/Kolkata"
    ],
    [
      "Ciudad Guayana, Venezuela",
      "America/Caracas"
    ],
    [
      "Malang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Trujillo, Peru",
      "America/Lima"
    ],
    [
      "Lome, Togo",
      "Africa/Lome"
    ],
    [
      "Pietermaritzburg, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Da Nang, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Aligarh, India",
      "Asia/Kolkata"
    ],
    [
      "Krakow, Poland",
      "Europe/Warsaw"
    ],
    [
      "Antalya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Hengyang, China",
      "Asia/Shanghai"
    ],
    [
      "Qinhuangdao, China",
      "Asia/Shanghai"
    ],
    [
      "Bhubaneshwar, India",
      "Asia/Kolkata"
    ],
    [
      "Natal, Brazil",
      "America/Fortaleza"
    ],
    [
      "Kota, India",
      "Asia/Kolkata"
    ],
    [
      "Kahriz, Iran",
      "Asia/Tehran"
    ],
    [
      "Xining, China",
      "Asia/Shanghai"
    ],
    [
      "Dammam, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Lodz, Poland",
      "Europe/Warsaw"
    ],
    [
      "Shangyu, China",
      "Asia/Shanghai"
    ],
    [
      "Tainan, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Niamey, Niger",
      "Africa/Niamey"
    ],
    [
      "Hohhot, China",
      "Asia/Shanghai"
    ],
    [
      "Homs, Syria",
      "Asia/Damascus"
    ],
    [
      "Tiruchirappalli, India",
      "Asia/Kolkata"
    ],
    [
      "Salem, India",
      "Asia/Kolkata"
    ],
    [
      "Cotonou, Benin",
      "Africa/Porto-Novo"
    ],
    [
      "San Miguel de Tucuman, Argentina",
      "America/Argentina/Tucuman"
    ],
    [
      "Anyang, China",
      "Asia/Shanghai"
    ],
    [
      "Sakai, Japan",
      "Asia/Tokyo"
    ],
    [
      "Thiruvananthapuram, India",
      "Asia/Kolkata"
    ],
    [
      "Jalandhar, India",
      "Asia/Kolkata"
    ],
    [
      "Boumerdas, Algeria",
      "Africa/Algiers"
    ],
    [
      "Columbus, United States",
      "America/New_York"
    ],
    [
      "Pasragad Branch, Iran",
      "Asia/Tehran"
    ],
    [
      "Austin, United States",
      "America/Chicago"
    ],
    [
      "Cankaya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Zarqa, Jordan",
      "Asia/Amman"
    ],
    [
      "Marseille, France",
      "Europe/Paris"
    ],
    [
      "Zaporizhzhya, Ukraine",
      "Europe/Zaporozhye"
    ],
    [
      "Muscat, Oman",
      "Asia/Muscat"
    ],
    [
      "Cebu City, Philippines",
      "Asia/Manila"
    ],
    [
      "Mombasa, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Zagreb - Centar, Croatia",
      "Europe/Zagreb"
    ],
    [
      "Bogor, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Bandar Lampung, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Jerusalem, Israel",
      "Asia/Jerusalem"
    ],
    [
      "Johor Bahru, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Freetown, Sierra Leone",
      "Africa/Freetown"
    ],
    [
      "Nanning, China",
      "Asia/Shanghai"
    ],
    [
      "San Francisco, United States",
      "America/Los_Angeles"
    ],
    [
      "Chihuahua, Mexico",
      "America/Chihuahua"
    ],
    [
      "Barquisimeto, Venezuela",
      "America/Caracas"
    ],
    [
      "Ottawa, Canada",
      "America/Toronto"
    ],
    [
      "La Paz, Bolivia",
      "America/La_Paz"
    ],
    [
      "Callao, Peru",
      "America/Lima"
    ],
    [
      "Ilorin, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Valencia, Spain",
      "Europe/Madrid"
    ],
    [
      "Jos, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Duque de Caxias, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Jacksonville, United States",
      "America/New_York"
    ],
    [
      "Indianapolis, United States",
      "America/Indiana/Indianapolis"
    ],
    [
      "Kampung Baru Subang, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Marrakesh, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Hubli, India",
      "Asia/Kolkata"
    ],
    [
      "Padang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Arequipa, Peru",
      "America/Lima"
    ],
    [
      "Ahvaz, Iran",
      "Asia/Tehran"
    ],
    [
      "Takeo, Cambodia",
      "Asia/Phnom_Penh"
    ],
    [
      "Ulan Bator, Mongolia",
      "Asia/Ulaanbaatar"
    ],
    [
      "Naucalpan de Juarez, Mexico",
      "America/Mexico_City"
    ],
    [
      "Ranchi, India",
      "Asia/Kolkata"
    ],
    [
      "Voronezh, Russia",
      "Europe/Moscow"
    ],
    [
      "Bucheon-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Tegucigalpa, Honduras",
      "America/Tegucigalpa"
    ],
    [
      "Saratov, Russia",
      "Europe/Volgograd"
    ],
    [
      "Wenzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Mysore, India",
      "Asia/Kolkata"
    ],
    [
      "Turin, Italy",
      "Europe/Rome"
    ],
    [
      "Pikine, Senegal",
      "Africa/Dakar"
    ],
    [
      "Vijayawada, India",
      "Asia/Kolkata"
    ],
    [
      "Mbuji-Mayi, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Konya, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Mendoza, Argentina",
      "America/Argentina/Mendoza"
    ],
    [
      "Klang, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Qiqihar, China",
      "Asia/Shanghai"
    ],
    [
      "Gwalior, India",
      "Asia/Kolkata"
    ],
    [
      "Pingdingshan, China",
      "Asia/Shanghai"
    ],
    [
      "Aba, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Guwahati, India",
      "Asia/Kolkata"
    ],
    [
      "Abobo, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Kaifeng, China",
      "Asia/Shanghai"
    ],
    [
      "Abu Ghurayb, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Qom, Iran",
      "Asia/Tehran"
    ],
    [
      "Bishkek, Kyrgyzstan",
      "Asia/Bishkek"
    ],
    [
      "Cochabamba, Bolivia",
      "America/La_Paz"
    ],
    [
      "Huaibei, China",
      "Asia/Shanghai"
    ],
    [
      "Sale, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Madurai, India",
      "Asia/Kolkata"
    ],
    [
      "Sao Luis, Brazil",
      "America/Fortaleza"
    ],
    [
      "Chiba, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jodhpur, India",
      "Asia/Kolkata"
    ],
    [
      "Nay Pyi Taw, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Krasnoyarsk, Russia",
      "Asia/Krasnoyarsk"
    ],
    [
      "Erbil, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Kingston, Jamaica",
      "America/Jamaica"
    ],
    [
      "Monrovia, Liberia",
      "Africa/Monrovia"
    ],
    [
      "San Jose, United States",
      "America/Los_Angeles"
    ],
    [
      "Sultanah, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Changzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Cartagena, Colombia",
      "America/Bogota"
    ],
    [
      "Maceio, Brazil",
      "America/Maceio"
    ],
    [
      "Napoli, Italy",
      "Europe/Rome"
    ],
    [
      "Coimbatore, India",
      "Asia/Kolkata"
    ],
    [
      "Chandigarh, India",
      "Asia/Kolkata"
    ],
    [
      "Ulsan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Koeln, Germany",
      "Europe/Berlin"
    ],
    [
      "Fes, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Port Elizabeth, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Managua, Nicaragua",
      "America/Managua"
    ],
    [
      "Zaria, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Srinagar, India",
      "Asia/Kolkata"
    ],
    [
      "Perm, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Birmingham, United Kingdom",
      "Europe/London"
    ],
    [
      "Zapopan, Mexico",
      "America/Mexico_City"
    ],
    [
      "Benxi, China",
      "Asia/Shanghai"
    ],
    [
      "Guatemala City, Guatemala",
      "America/Guatemala"
    ],
    [
      "Baoding, China",
      "Asia/Shanghai"
    ],
    [
      "Solapur, India",
      "Asia/Kolkata"
    ],
    [
      "Kitakyushu, Japan",
      "Asia/Tokyo"
    ],
    [
      "Zhu Cheng City, China",
      "Asia/Shanghai"
    ],
    [
      "Shivaji Nagar, India",
      "Asia/Kolkata"
    ],
    [
      "Odessa, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Jieyang, China",
      "Asia/Shanghai"
    ],
    [
      "Nova Iguacu, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Volgograd, Russia",
      "Europe/Volgograd"
    ],
    [
      "Aurangabad, India",
      "Asia/Kolkata"
    ],
    [
      "Brussels, Belgium",
      "Europe/Brussels"
    ],
    [
      "Calgary, Canada",
      "America/Edmonton"
    ],
    [
      "Dublin, Ireland",
      "Europe/Dublin"
    ],
    [
      "Donetsk, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Huainan, China",
      "Asia/Shanghai"
    ],
    [
      "Haora, India",
      "Asia/Kolkata"
    ],
    [
      "Jabalpur, India",
      "Asia/Kolkata"
    ],
    [
      "Campinas, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Seongnam-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Dnipropetrovsk, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Ufa, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Xianyang, China",
      "Asia/Shanghai"
    ],
    [
      "Teni, India",
      "Asia/Kolkata"
    ],
    [
      "Taichung, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Changshu City, China",
      "Asia/Shanghai"
    ],
    [
      "Tbilisi, Georgia",
      "Asia/Tbilisi"
    ],
    [
      "Datong, China",
      "Asia/Shanghai"
    ],
    [
      "Chelyabinsk, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Sendai, Japan",
      "Asia/Tokyo"
    ],
    [
      "Sendai, Japan",
      "Asia/Tokyo"
    ],
    [
      "Visakhapatnam, India",
      "Asia/Kolkata"
    ],
    [
      "Gaziantep, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Goyang-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Allahabad, India",
      "Asia/Kolkata"
    ],
    [
      "Rostov-na-Donu, Russia",
      "Europe/Moscow"
    ],
    [
      "Yono, Japan",
      "Asia/Tokyo"
    ],
    [
      "Ouagadougou, Burkina Faso",
      "Africa/Ouagadougou"
    ],
    [
      "Amritsar, India",
      "Asia/Kolkata"
    ],
    [
      "Yerevan, Armenia",
      "Asia/Yerevan"
    ],
    [
      "Kazan, Russia",
      "Europe/Moscow"
    ],
    [
      "Maiduguri, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Leon, Mexico",
      "America/Mexico_City"
    ],
    [
      "Baku, Azerbaijan",
      "Asia/Baku"
    ],
    [
      "Malingao, Philippines",
      "Asia/Manila"
    ],
    [
      "Monterrey, Mexico",
      "America/Monterrey"
    ],
    [
      "Benin City, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Omsk, Russia",
      "Asia/Omsk"
    ],
    [
      "Samara, Russia",
      "Europe/Samara"
    ],
    [
      "Dubai, United Arab Emirates",
      "Asia/Dubai"
    ],
    [
      "Lijiang, China",
      "Asia/Shanghai"
    ],
    [
      "Hiroshima, Japan",
      "Asia/Tokyo"
    ],
    [
      "Port Harcourt, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Tripoli, Libya",
      "Africa/Tripoli"
    ],
    [
      "Sofia, Bulgaria",
      "Europe/Sofia"
    ],
    [
      "Copenhagen, Denmark",
      "Europe/Copenhagen"
    ],
    [
      "Varanasi, India",
      "Asia/Kolkata"
    ],
    [
      "Prague, Czech Republic",
      "Europe/Prague"
    ],
    [
      "Guarulhos, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Goiania, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Guiyang, China",
      "Asia/Shanghai"
    ],
    [
      "Rosario, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Rajkot, India",
      "Asia/Kolkata"
    ],
    [
      "Fuzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Gustavo A. Madero, Mexico",
      "America/Monterrey"
    ],
    [
      "Maputo, Mozambique",
      "Africa/Maputo"
    ],
    [
      "Dombivli, India",
      "Asia/Kolkata"
    ],
    [
      "Gustavo A. Madero, Mexico",
      "America/Mexico_City"
    ],
    [
      "Saitama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Dallas, United States",
      "America/Chicago"
    ],
    [
      "Depok, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Ghaziabad, India",
      "Asia/Kolkata"
    ],
    [
      "Tongshan, China",
      "Asia/Shanghai"
    ],
    [
      "Anshan, China",
      "Asia/Shanghai"
    ],
    [
      "Yueyang, China",
      "Asia/Shanghai"
    ],
    [
      "Santiago de los Caballeros, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Omdurman, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Mandalay, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Davao, Philippines",
      "Asia/Manila"
    ],
    [
      "Peshawar, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Faridabad, India",
      "Asia/Kolkata"
    ],
    [
      "Nowrangapur, India",
      "Asia/Kolkata"
    ],
    [
      "Meerut, India",
      "Asia/Kolkata"
    ],
    [
      "Adelaide, Australia",
      "Australia/Adelaide"
    ],
    [
      "Ciudad Nezahualcoyotl, Mexico",
      "America/Mexico_City"
    ],
    [
      "Port-au-Prince, Haiti",
      "America/Port-au-Prince"
    ],
    [
      "Milano, Italy",
      "Europe/Rome"
    ],
    [
      "Suwon-si, South Korea",
      "Asia/Seoul"
    ],
    [
      "Adana, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Shiraz, Iran",
      "Asia/Tehran"
    ],
    [
      "Ra's Bayrut, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Stockholm, Sweden",
      "Europe/Stockholm"
    ],
    [
      "Munich, Germany",
      "Europe/Berlin"
    ],
    [
      "Thane, India",
      "Asia/Kolkata"
    ],
    [
      "Kalyan, India",
      "Asia/Kolkata"
    ],
    [
      "Lusaka, Zambia",
      "Africa/Lusaka"
    ],
    [
      "Montevideo, Uruguay",
      "America/Montevideo"
    ],
    [
      "Belgrade, Serbia",
      "Europe/Belgrade"
    ],
    [
      "Budta, Philippines",
      "Asia/Manila"
    ],
    [
      "Amman, Jordan",
      "Asia/Amman"
    ],
    [
      "Nizhniy Novgorod, Russia",
      "Europe/Moscow"
    ],
    [
      "Pimpri, India",
      "Asia/Kolkata"
    ],
    [
      "Brazzaville, Republic of the Congo",
      "Africa/Brazzaville"
    ],
    [
      "Semarang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Nashik, India",
      "Asia/Kolkata"
    ],
    [
      "Bamako, Mali",
      "Africa/Bamako"
    ],
    [
      "Yaounde, Cameroon",
      "Africa/Douala"
    ],
    [
      "Medina, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Baotou, China",
      "Asia/Shanghai"
    ],
    [
      "South Tangerang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kawasaki, Japan",
      "Asia/Tokyo"
    ],
    [
      "San Diego, United States",
      "America/Los_Angeles"
    ],
    [
      "Makassar, Indonesia",
      "Asia/Makassar"
    ],
    [
      "Mecca, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Gorakhpur, India",
      "Asia/Kolkata"
    ],
    [
      "San Antonio, United States",
      "America/Chicago"
    ],
    [
      "Douala, Cameroon",
      "Africa/Douala"
    ],
    [
      "Khulna, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Yekaterinburg, Russia",
      "Asia/Yekaterinburg"
    ],
    [
      "Kampala, Uganda",
      "Africa/Kampala"
    ],
    [
      "Handan, China",
      "Asia/Shanghai"
    ],
    [
      "Santa Cruz de la Sierra, Bolivia",
      "America/La_Paz"
    ],
    [
      "Tangerang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Porto Alegre, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Lubumbashi, Democratic Republic of the Congo",
      "Africa/Lubumbashi"
    ],
    [
      "Tijuana, Mexico",
      "America/Tijuana"
    ],
    [
      "Guankou, China",
      "Asia/Shanghai"
    ],
    [
      "Barranquilla, Colombia",
      "America/Bogota"
    ],
    [
      "Gujranwala, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Valencia, Venezuela",
      "America/Caracas"
    ],
    [
      "The Bronx, United States",
      "America/New_York"
    ],
    [
      "Hyderabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Luoyang, China",
      "Asia/Shanghai"
    ],
    [
      "Antananarivo, Madagascar",
      "Indian/Antananarivo"
    ],
    [
      "Fukuoka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Quito, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Fushun, China",
      "Asia/Shanghai"
    ],
    [
      "Belem, Brazil",
      "America/Belem"
    ],
    [
      "Vadodara, India",
      "Asia/Kolkata"
    ],
    [
      "Bursa, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Gwangju, South Korea",
      "Asia/Seoul"
    ],
    [
      "Novosibirsk, Russia",
      "Asia/Novosibirsk"
    ],
    [
      "Tabriz, Iran",
      "Asia/Tehran"
    ],
    [
      "Cordoba, Argentina",
      "America/Argentina/Cordoba"
    ],
    [
      "Agra, India",
      "Asia/Kolkata"
    ],
    [
      "Kharkiv, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Hanoi, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Multan, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Palembang, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Kathmandu, Nepal",
      "Asia/Kathmandu"
    ],
    [
      "Phoenix, United States",
      "America/Phoenix"
    ],
    [
      "Karaj, Iran",
      "Asia/Tehran"
    ],
    [
      "Kuala Lumpur, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Kyoto, Japan",
      "Asia/Tokyo"
    ],
    [
      "Kota Bharu, Malaysia",
      "Asia/Kuala_Lumpur"
    ],
    [
      "Kumasi, Ghana",
      "Africa/Accra"
    ],
    [
      "Daejeon, South Korea",
      "Asia/Seoul"
    ],
    [
      "Recife, Brazil",
      "America/Recife"
    ],
    [
      "Asuncion, Paraguay",
      "America/Asuncion"
    ],
    [
      "Manhattan, United States",
      "America/New_York"
    ],
    [
      "Ciudad Juarez, Mexico",
      "America/Ojinaga"
    ],
    [
      "Kaohsiung, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Bekasi, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Philadelphia, United States",
      "America/New_York"
    ],
    [
      "Kobe, Japan",
      "Asia/Tokyo"
    ],
    [
      "Harare, Zimbabwe",
      "Africa/Harare"
    ],
    [
      "Ludhiana, India",
      "Asia/Kolkata"
    ],
    [
      "Isfahan, Iran",
      "Asia/Tehran"
    ],
    [
      "Damascus, Syria",
      "Asia/Damascus"
    ],
    [
      "Phnom Penh, Cambodia",
      "Asia/Phnom_Penh"
    ],
    [
      "Kaduna, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Puebla, Mexico",
      "America/Mexico_City"
    ],
    [
      "Xinyang, China",
      "Asia/Shanghai"
    ],
    [
      "Manaus, Brazil",
      "America/Manaus"
    ],
    [
      "Bhopal, India",
      "Asia/Kolkata"
    ],
    [
      "Patna, India",
      "Asia/Kolkata"
    ],
    [
      "Montreal, Canada",
      "America/Toronto"
    ],
    [
      "Aleppo, Syria",
      "Asia/Damascus"
    ],
    [
      "Pretoria, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Barcelona, Spain",
      "Europe/Madrid"
    ],
    [
      "Guadalajara, Mexico",
      "America/Mexico_City"
    ],
    [
      "Rabat, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Vienna, Austria",
      "Europe/Vienna"
    ],
    [
      "Soweto, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Bandung, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Warsaw, Poland",
      "Europe/Warsaw"
    ],
    [
      "Curitiba, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Hamburg, Germany",
      "Europe/Berlin"
    ],
    [
      "Mosul, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Budapest, Hungary",
      "Europe/Budapest"
    ],
    [
      "Minsk, Belarus",
      "Europe/Minsk"
    ],
    [
      "Rawalpindi, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Medan, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Maracay, Venezuela",
      "America/Caracas"
    ],
    [
      "Conakry, Guinea",
      "Africa/Conakry"
    ],
    [
      "Ecatepec, Mexico",
      "America/Mexico_City"
    ],
    [
      "Iztapalapa, Mexico",
      "America/Mexico_City"
    ],
    [
      "Indore, India",
      "Asia/Kolkata"
    ],
    [
      "Camayenne, Guinea",
      "Africa/Conakry"
    ],
    [
      "Bucharest, Romania",
      "Europe/Bucharest"
    ],
    [
      "Jilin, China",
      "Asia/Shanghai"
    ],
    [
      "Sapporo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Perth, Australia",
      "Australia/Perth"
    ],
    [
      "Beirut, Lebanon",
      "Asia/Beirut"
    ],
    [
      "Sanaa, Yemen",
      "Asia/Aden"
    ],
    [
      "Ordos, China",
      "Asia/Shanghai"
    ],
    [
      "Guayaquil, Ecuador",
      "America/Guayaquil"
    ],
    [
      "Accra, Ghana",
      "Africa/Accra"
    ],
    [
      "Khartoum, Sudan",
      "Africa/Khartoum"
    ],
    [
      "Algiers, Algeria",
      "Africa/Algiers"
    ],
    [
      "Tashkent, Uzbekistan",
      "Asia/Tashkent"
    ],
    [
      "Medellin, Colombia",
      "America/Bogota"
    ],
    [
      "Almaty, Kazakhstan",
      "Asia/Almaty"
    ],
    [
      "Al Basrah al Qadimah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Kowloon, Hong Kong",
      "Asia/Hong_Kong"
    ],
    [
      "Johannesburg, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Al Mawsil al Jadidah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Houston, United States",
      "America/Chicago"
    ],
    [
      "Paris, France",
      "Europe/Paris"
    ],
    [
      "Havana, Cuba",
      "America/Havana"
    ],
    [
      "Brisbane, Australia",
      "Australia/Brisbane"
    ],
    [
      "Nagoya, Japan",
      "Asia/Tokyo"
    ],
    [
      "Santo Domingo, Dominican Republic",
      "America/Santo_Domingo"
    ],
    [
      "Brasilia, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Maracaibo, Venezuela",
      "America/Caracas"
    ],
    [
      "Nagpur, India",
      "Asia/Kolkata"
    ],
    [
      "Borough of Queens, United States",
      "America/New_York"
    ],
    [
      "Brooklyn, United States",
      "America/New_York"
    ],
    [
      "Mashhad, Iran",
      "Asia/Tehran"
    ],
    [
      "Rome, Italy",
      "Europe/Rome"
    ],
    [
      "Nanchang, China",
      "Asia/Shanghai"
    ],
    [
      "Belo Horizonte, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Surabaya, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Cali, Colombia",
      "America/Bogota"
    ],
    [
      "Fortaleza, Brazil",
      "America/Fortaleza"
    ],
    [
      "Al Jizah, Egypt",
      "Africa/Cairo"
    ],
    [
      "Lucknow, India",
      "Asia/Kolkata"
    ],
    [
      "Dakar, Senegal",
      "Africa/Dakar"
    ],
    [
      "Izmir, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Faisalabad, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Daegu, South Korea",
      "Asia/Seoul"
    ],
    [
      "Mogadishu, Somalia",
      "Africa/Mogadishu"
    ],
    [
      "Osaka, Japan",
      "Asia/Tokyo"
    ],
    [
      "Toronto, Canada",
      "America/Toronto"
    ],
    [
      "Navi Mumbai, India",
      "Asia/Kolkata"
    ],
    [
      "Basrah, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Yunfu, China",
      "Asia/Shanghai"
    ],
    [
      "Incheon, South Korea",
      "Asia/Seoul"
    ],
    [
      "Lanzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Chicago, United States",
      "America/Chicago"
    ],
    [
      "Dar es Salaam, Tanzania",
      "Africa/Dar_es_Salaam"
    ],
    [
      "Jaipur, India",
      "Asia/Kolkata"
    ],
    [
      "Salvador, Brazil",
      "America/Bahia"
    ],
    [
      "Nairobi, Kenya",
      "Africa/Nairobi"
    ],
    [
      "Addis Ababa, Ethiopia",
      "Africa/Addis_Ababa"
    ],
    [
      "Quezon City, Philippines",
      "Asia/Manila"
    ],
    [
      "Luanda, Angola",
      "Africa/Luanda"
    ],
    [
      "Kiev, Ukraine",
      "Europe/Kiev"
    ],
    [
      "Kanpur, India",
      "Asia/Kolkata"
    ],
    [
      "Shijiazhuang, China",
      "Asia/Shanghai"
    ],
    [
      "Jeddah, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Surat, India",
      "Asia/Kolkata"
    ],
    [
      "Pune, India",
      "Asia/Kolkata"
    ],
    [
      "Caracas, Venezuela",
      "America/Caracas"
    ],
    [
      "UEruemqi, China",
      "Asia/Urumqi"
    ],
    [
      "Kabul, Afghanistan",
      "Asia/Kabul"
    ],
    [
      "Changsha, China",
      "Asia/Shanghai"
    ],
    [
      "Durban, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Zhongshan, China",
      "Asia/Urumqi"
    ],
    [
      "Zibo, China",
      "Asia/Shanghai"
    ],
    [
      "Casablanca, Morocco",
      "Africa/Casablanca"
    ],
    [
      "Pyongyang, North Korea",
      "Asia/Pyongyang"
    ],
    [
      "Madrid, Spain",
      "Europe/Madrid"
    ],
    [
      "Hefei, China",
      "Asia/Shanghai"
    ],
    [
      "Tangshan, China",
      "Asia/Shanghai"
    ],
    [
      "Berlin, Germany",
      "Europe/Berlin"
    ],
    [
      "Taiyuan, China",
      "Asia/Shanghai"
    ],
    [
      "Cape Town, South Africa",
      "Africa/Johannesburg"
    ],
    [
      "Shiyan, China",
      "Asia/Shanghai"
    ],
    [
      "Ho Chi Minh City, Vietnam",
      "Asia/Ho_Chi_Minh"
    ],
    [
      "Ningbo, China",
      "Asia/Shanghai"
    ],
    [
      "Tianshui, China",
      "Asia/Shanghai"
    ],
    [
      "Ankara, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Xiamen, China",
      "Asia/Shanghai"
    ],
    [
      "Wuxi, China",
      "Asia/Shanghai"
    ],
    [
      "Singapore, Singapore",
      "Asia/Singapore"
    ],
    [
      "Ibadan, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Yokohama, Japan",
      "Asia/Tokyo"
    ],
    [
      "Puyang, China",
      "Asia/Shanghai"
    ],
    [
      "Hyderabad, India",
      "Asia/Kolkata"
    ],
    [
      "Foshan, China",
      "Asia/Shanghai"
    ],
    [
      "Kano, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Abidjan, Ivory Coast",
      "Africa/Abidjan"
    ],
    [
      "Busan, South Korea",
      "Asia/Seoul"
    ],
    [
      "Qingdao, China",
      "Asia/Shanghai"
    ],
    [
      "Ahmedabad, India",
      "Asia/Kolkata"
    ],
    [
      "Los Angeles, United States",
      "America/Los_Angeles"
    ],
    [
      "Alexandria, Egypt",
      "Africa/Cairo"
    ],
    [
      "Kunming, China",
      "Asia/Shanghai"
    ],
    [
      "Chittagong, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Dalian, China",
      "Asia/Shanghai"
    ],
    [
      "Changchun, China",
      "Asia/Shanghai"
    ],
    [
      "Riyadh, Saudi Arabia",
      "Asia/Riyadh"
    ],
    [
      "Melbourne, Australia",
      "Australia/Melbourne"
    ],
    [
      "Zhengzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Chennai, India",
      "Asia/Kolkata"
    ],
    [
      "Jinan, China",
      "Asia/Shanghai"
    ],
    [
      "Yangon, Myanmar",
      "Asia/Rangoon"
    ],
    [
      "Sydney, Australia",
      "Australia/Sydney"
    ],
    [
      "Kolkata, India",
      "Asia/Kolkata"
    ],
    [
      "Santiago, Chile",
      "America/Santiago"
    ],
    [
      "Saint Petersburg, Russia",
      "Europe/Moscow"
    ],
    [
      "Bengaluru, India",
      "Asia/Kolkata"
    ],
    [
      "Bangkok, Thailand",
      "Asia/Bangkok"
    ],
    [
      "Shantou, China",
      "Asia/Shanghai"
    ],
    [
      "Suzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Tai'an, China",
      "Asia/Shanghai"
    ],
    [
      "Harbin, China",
      "Asia/Shanghai"
    ],
    [
      "Rio de Janeiro, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Hangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Shenyang, China",
      "Asia/Shanghai"
    ],
    [
      "Lahore, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Xi'an, China",
      "Asia/Shanghai"
    ],
    [
      "Hong Kong, Hong Kong",
      "Asia/Hong_Kong"
    ],
    [
      "Nanchong, China",
      "Asia/Shanghai"
    ],
    [
      "Tehran, Iran",
      "Asia/Tehran"
    ],
    [
      "Nanjing, China",
      "Asia/Shanghai"
    ],
    [
      "Baghdad, Iraq",
      "Asia/Baghdad"
    ],
    [
      "Chengdu, China",
      "Asia/Shanghai"
    ],
    [
      "Chongqing, China",
      "Asia/Shanghai"
    ],
    [
      "City of London, United Kingdom",
      "Europe/London"
    ],
    [
      "London, United Kingdom",
      "Europe/London"
    ],
    [
      "Bogota, Colombia",
      "America/Bogota"
    ],
    [
      "Cairo, Egypt",
      "Africa/Cairo"
    ],
    [
      "Lima, Peru",
      "America/Lima"
    ],
    [
      "Kinshasa, Democratic Republic of the Congo",
      "Africa/Kinshasa"
    ],
    [
      "Taipei, Taiwan",
      "Asia/Taipei"
    ],
    [
      "Dongguan, China",
      "Asia/Shanghai"
    ],
    [
      "New York City, United States",
      "America/New_York"
    ],
    [
      "Tokyo, Japan",
      "Asia/Tokyo"
    ],
    [
      "Jakarta, Indonesia",
      "Asia/Jakarta"
    ],
    [
      "Lagos, Nigeria",
      "Africa/Lagos"
    ],
    [
      "Wuhan, China",
      "Asia/Shanghai"
    ],
    [
      "Sao Paulo, Brazil",
      "America/Sao_Paulo"
    ],
    [
      "Seoul, South Korea",
      "Asia/Seoul"
    ],
    [
      "Dhaka, Bangladesh",
      "Asia/Dhaka"
    ],
    [
      "Shenzhen, China",
      "Asia/Shanghai"
    ],
    [
      "Moscow, Russia",
      "Europe/Moscow"
    ],
    [
      "Manila, Philippines",
      "Asia/Manila"
    ],
    [
      "Delhi, India",
      "Asia/Kolkata"
    ],
    [
      "Guangzhou, China",
      "Asia/Shanghai"
    ],
    [
      "Tianjin, China",
      "Asia/Shanghai"
    ],
    [
      "Istanbul, Turkey",
      "Europe/Istanbul"
    ],
    [
      "Karachi, Pakistan",
      "Asia/Karachi"
    ],
    [
      "Beijing, China",
      "Asia/Shanghai"
    ],
    [
      "Mexico City, Mexico",
      "America/Mexico_City"
    ],
    [
      "Mumbai, India",
      "Asia/Kolkata"
    ],
    [
      "Buenos Aires, Argentina",
      "America/Argentina/Buenos_Aires"
    ],
    [
      "Shanghai, China",
      "Asia/Shanghai"
    ]
  ]

  departure_timezone = this.city_timezones.filter(e => e[0].includes("Malaysia")).sort()
  arrival_timezone = this.city_timezones.filter(e => e[0].includes("United States") || e[0].includes("Japan") || e[0].includes("United Kingdom")).sort()

  onClick = () => {
    var config = {
      departureCity: this.state.departureCity[0],
      departureTimezone: this.state.departureCity[1],
      departureDatetime: document.getElementById('dtime').value.replace("T", " "),
      arrivalCity: this.state.arrivalCity[0],
      arrivalTimezone: this.state.arrivalCity[1],
      arrivalDatetime: document.getElementById('atime').value.replace("T", " "),
      sleepTime: document.getElementById('sleepStart').value,
      wakeTime:  document.getElementById('sleepEnd').value,
      planStart: this.state.startShift,
      shiftSpeed: window.JetLag.Constants.SHIFT_SPEED_IMMEDIATE
    }
    console.log("params:", config)
    var core = new window.JetLag.Core();
    var plan = core.getPlan(config);
    console.log(plan.getAllEvents())
    this.props.history.push({
      pathname: "/jetlagschedule",
      props: plan.getAllEvents()
    })
  }

  render() {
    // var config = {
    //   departureCity: "New York City, United States",
    //   departureTimezone: "America/New_York",
    //   departureDatetime: "2016-05-08 21:30",
    //   arrivalCity: "Paris, France",
    //   arrivalTimezone: "Europe/Paris",
    //   arrivalDatetime: "2016-05-09 11:05",
    //   sleepTime: "22:00",
    //   wakeTime: "06:00",
    //   planStart: window.JetLag.Constants.PLAN_START_3_DAYS_ADVANCE,
    //   shiftSpeed: window.JetLag.Constants.SHIFT_SPEED_IMMEDIATE
    // }

    // var core = new window.JetLag.Core();
    // var plan = core.getPlan(config);
    // console.log(plan)
    console.log(this.props)
    try {
      var {usualSleepStart, usualSleepEnd} = this.props.location.props.location.props
    } catch (error) {
      var usualSleepStart = "";
      var usualSleepEnd = "";
    }
    
    console.log(usualSleepStart, usualSleepEnd)
    return (
      <div>
        <h1 className={"title"}>Jet Fighter <AvTimerIcon fontSize="large"></AvTimerIcon></h1>

        <div style={{ position: "relative", top: "100px", left: "60px" }}>
          <Autocomplete
            id="departure_city"
            options={this.departure_timezone}
            getOptionLabel={(e) => e[0]}
            onChange={(event, newValue) => {
              this.setState({departureCity: newValue});
            }}
            value={this.state.departureCity !== "" ? this.state.departureCity : null}
            style={{ width: 242 }}
            renderInput={(params) => <TextField {...params} label="Departure City" variant="outlined" />}
          />
        </div>
        <div style={{ position: "relative", top: "110px", left: "60px"  }}>
        <Autocomplete
            id="arrival_city"
            options={this.arrival_timezone}
            getOptionLabel={(e) => e[0]}
            onChange={(event, newValue) => {
              this.setState({arrivalCity: newValue});
            }}
            value={this.state.arrivalCity !== "" ? this.state.arrivalCity : null}
            style={{ width: 242 }}
            renderInput={(params) => <TextField {...params} label="Arrival City" variant="outlined" />}
          />
        </div>
        <TextField
          style={{ top: "130px" }}
          id="dtime"
          label="Departure Time"
          type="datetime-local"
          defaultValue="2020-10-04T09:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          style={{ top: "140px" }}
          id="atime"
          label="Arrival Time"
          type="datetime-local"
          defaultValue="2020-10-04T10:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />

        <h4 style={{ position: "relative", color: "#38383a", top: "160px" }}>Usual Sleeping Hours</h4>

        <div className={"lag-flex-container"}>
          <TextField
            style={{ left: "50px" }}
            id="sleepStart"
            label="Start"
            type="time"
            defaultValue="22:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <h4 style={{ position: "relative", left: "70px", color: "#38383a", top: "10px" }}>-</h4>
          <TextField
            style={{ left: "96px" }}
            id="sleepEnd"
            label="Wake"
            type="time"
            defaultValue="07:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>

        <div style={{ position: "relative", top: "190px" }}>
          <FormControl variant="outlined" style={{ width: "270px" }}>
            <InputLabel id="startshift1">Start Shifting Sleep Schedule</InputLabel>
            <Select
              value={this.state.startShift ? this.state.startShift : ""}
              onChange={(e)=>{this.setState({startShift: e.target.value})}}
              labelId="startshift1"
              id="startshift"
              label="startshift1"
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={window.JetLag.Constants.PLAN_START_ARRIVAL}>after arriving</MenuItem>
              <MenuItem value={window.JetLag.Constants.PLAN_START_DEPARTURE}>after departing on the plane</MenuItem>
              <MenuItem value={window.JetLag.Constants.PLAN_START_3_DAYS_ADVANCE}>3 days before departing</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button startIcon={<ScheduleIcon></ScheduleIcon>} variant="contained" className={"jet-button-icon"} onClick={() => this.onClick()}>Get Plan</Button>
      </div>
    );
  }
}

export default JetLagPage;