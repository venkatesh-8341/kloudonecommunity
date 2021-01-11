import { LightningElement } from 'lwc';
import Home_Image1 from '@salesforce/resourceUrl/Homeimg1';
import Home_Image2 from '@salesforce/resourceUrl/Homeimg2';
import Home_Image3 from '@salesforce/resourceUrl/Homeimg3';
import Home_Image4 from '@salesforce/resourceUrl/Homeimg4';
export default class crorocialimage extends LightningElement {
    HomeImage1 = Home_Image1 + '?Home_Image1.png';  
    HomeImage1= Home_Image1 + '?';
    HomeImage2 = Home_Image2 + '?Home_Image2.png';  
    HomeImage2= Home_Image2 + '?';
    HomeImage3 = Home_Image3 + '?Home_Image3.png';  
    HomeImage3= Home_Image3 + '?';
    HomeImage4 =  Home_Image4 + '?Home_Image4.png';  
    HomeImage4=  Home_Image4 + '?';
}

