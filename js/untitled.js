///JS 子类继承和方法重写的例子
!function(window){
    function Solder(name){
        if(!this instanceof Solder){
            throw new Error('cannot invoke without new.');
        }
        this.name = name;
    }
    Solder.prototype.showEquip = function(equip){
        
        throw new Error('did not implemented!');
    };
    function AttackSolder(name, attack){
        if(!this instanceof AttackSolder){
            throw new Error('cannot invoke without new.');
        }
        this.attack = attack;
        Solder.call(this,name);
    }
    function DefendSolder(name, defend){
        if(!this instanceof DefendSolder){
            throw new Error('cannot invoke without new.');
        }
        this.defend = defend;
        Solder.call(this,name);
    }
    function inherit(supclass, subclass){
        subclass.prototype = Object.create(supclass.prototype);
        subclass.prototype.constructor = subclass;
    }

    inherit(Solder,AttackSolder);
    inherit(Solder,DefendSolder);
    

    AttackSolder.prototype.showEquip = function(attack){
        console.log("我有一把"+attack+"，所以我有能力做攻击者");
        //Solder.prototype.showEquip.call(this, attack);
    }
    DefendSolder.prototype.showEquip = function(defend){
        console.log("我有一个"+defend+",所以我要做防御者");
        //Solder.prototype.showEquip.call(this,defend);
    }
   
    Object.defineProperties(
        window,{
            AttackSolder:{value:AttackSolder},
            DefendSolder:{value:DefendSolder}
        }
    );
}(this);