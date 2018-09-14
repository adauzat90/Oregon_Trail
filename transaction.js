class Transaction{
    constructor(){
        this.oxen = 0;
        this.food = 0;
        this.clothing = 0;
        this.wagonWheel = 0;
        this.wagonAxle = 0;
        this.wagonTongue = 0;
        this.worms = 0;
		this.total = 0;
    }
    
	clearTransaction(){
		this.oxen = 0;
        this.food = 0;
        this.clothing = 0;
		this.worms = 0;
        this.wagonWheels = 0;
        this.wagonAxles = 0;
        this.wagonTongues = 0;
		this.total = 0;
	}
	buyOxen(oxen,price){this.oxen=oxen; 								this.total += oxen*price;}
	buyFood(food,price){this.food=food; 								this.total += food*price;}
	buyClothing(clothing,price){this.clothing=clothing; 				this.total += clothing*price;}
	buyWorms(worms,price){this.worms=worms;								this.total += worms*price;}
	buyWagonWheel(wagonWheel,price){this.wagonWheels=wagonWheel; 		this.total += wagonWheel*price;}
	buyWagonAxle(wagonAxle,price){this.wagonAxles=wagonAxle; 			this.total += wagonAxle*price;}
	buyWagonTongue(wagonTongue,price){this.wagonTongues=wagonTongue; 	this.total += wagonTongue*price;}
}
