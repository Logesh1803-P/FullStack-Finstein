import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

    data: any;

    options: any;

    data1: any;

    options1: any;

    data2: any;

    options2: any;

    data3: any;

    options3: any;

//     items: MenuItem[] = [];
//     position: any = 'top';

//     positionOptions: any[] = [
//         {
//             label: 'Bottom',
//             value: 'bottom'
//         },
//         {
//             label: 'Top',
//             value: 'top'
//         },
//         {
//             label: 'Left',
//             value: 'left'
//         },
//         {
//             label: 'Right',
//             value: 'right'
//         }
//     ];
// label: string|undefined;
    constructor() { }
  

    ngOnInit() {
        this.chart();
        this.chart1();
        this.chart2();
        this.chart3();

        
        // this.items = [
        //     {
        //         label: 'Finder',
        //         icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
        //     },
        //     {
        //         label: 'App Store',
        //         icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
        //     },
        //     {
        //         label: 'Photos',
        //         icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
        //     },
        //     {
        //         label: 'Trash',
        //         icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
        //     }
        // ];
    }

    chart1(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data1 = {
            
            datasets: [
                {
                    data: [70,30],
                    backgroundColor: [documentStyle.getPropertyValue('#080325'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    borderWidth: 0
                }
            ]
        };


        this.options1 = {
            cutout: '90%',
            plugins: {
                responsive: true,
                maintainAspectRatio: false,      
                legend: {
                    labels: {
                        color: textColor,
                        boxWidth: 20

                    },
                }
            }
        };
    }

    //chart
    chart2(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data2 = {
            
            datasets: [
                {
                    data: [60,40],
                    backgroundColor: [documentStyle.getPropertyValue('#080325'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    borderWidth: 0
                }
            ]
        };


        this.options2 = {
            cutout: '95%',
            plugins: {
                responsive: true,
                maintainAspectRatio: false,      
                legend: {
                    labels: {
                        color: textColor,
                        boxWidth: 20

                    },
                }
            }
        };
    }
    //chart2
    chart3(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data3 = {
            
            datasets: [
                {
                    data: [40,60],
                    backgroundColor: [documentStyle.getPropertyValue('#080325'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    borderWidth: 0
                }
            ]
        };


        this.options3 = {
            cutout: '95%',
            plugins: {
                responsive: true,
                maintainAspectRatio: false,      
                legend: {
                    labels: {
                        color: textColor,
                        boxWidth: 20

                    },
                }
            }
        };
    }
    //chaqrt3
    chart(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            
            datasets: [
                {
                    data: [40,60],
                    backgroundColor: [documentStyle.getPropertyValue('#080325'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    borderWidth: 0
                }
            ]
        };


        this.options = {
            cutout: '90%',
            plugins: {
                responsive: true,
                maintainAspectRatio: false,      
                legend: {
                    labels: {
                        color: textColor,
                        boxWidth: 20

                    },
                }
            }
        };
    }
    }


    //chart1
    

