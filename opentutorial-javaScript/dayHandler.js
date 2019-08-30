function dayHandler(self){
    
    if(self.value === '밤'){
        colorSetter.Body('밤');
        colorSetter.heading('밤');
        colorSetter.Link('밤');

        self.value = '낮';
    }
    else{
        colorSetter.Body('낮');
        colorSetter.heading('낮');
        colorSetter.Link('낮');

        self.value = '밤';
    }
}