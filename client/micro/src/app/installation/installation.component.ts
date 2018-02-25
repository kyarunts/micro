import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

    public images: Object[] = [
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg'},
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
    ]
    constructor() { }
    
    ngOnInit() {
        window.document.body.scrollIntoView(true);
    }
    
}
