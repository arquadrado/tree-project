if (Meteor.isClient) {

  Template.game.helpers({

    game: function(){

      var height = $(window).height();
      var width = $(window).width();

      var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update }, true);

      function preload() {

        //game.load.image('tree', '/Tree.png');
        game.load.spritesheet('tree', '/tree-sheet.png', 467, 613, 5);
        console.log("PRELOAD");


      }

      function create() {

        var tree = game.add.sprite(500, -200 , 'tree', 5);
        //tree.scale.setTo(width/tree.width, height/tree.height);
        tree.scale.setTo(1, 1);

        var anim = tree.animations.add('walk');

        

        //anim.onStart.add(animationStarded, this);
        //anim.onLoop.add(animationLooped, this);
        //anim.onComplete.add(animationStoped, this);

        anim.play(5, true);
        this.input.onDown.add(checkButtonClick);

        
        //tree.scale.setTo(game.width/tree.width, game.height/tree.height);
        console.log("CREATE");
      }

      function checkButtonClick(){
        console.log("Botão primido");
      }


      function resize() {
       console.log("RESIZE");

      }

      function update() {

          //document.getElementById('body').style.background = '#162B51';
          //document.getElementById('body').style.background = '#FCA104';
          

          this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
          //this.game.scale.setShowAll();
          window.addEventListener('resize', function () {
          //this.game.scale.refresh();
          });

          //game.input.onDown.addOnce(checkButtonClick, this);
          
      }
    }



  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
