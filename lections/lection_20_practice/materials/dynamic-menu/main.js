window.onload = function() {
    const data = { 
		name: 'menu', 
		type: 'column', 
		items: [
			{
				title: 'title 1',
				handler: 'ActionAdd'
            },
            {
				title: 'title 1',
				handler: 'ActionAdd'
            },
            {
				title: 'title 1',
				handler: 'ActionAdd'
			},
			{
				title: 'title 2',
				handler: 'ActionSaveAs',
                items: [
                    {
                        title: 'title 1',
                        handler: 'ActionAdd'
                    }
                ]
			},
			{
				title: 'title 3',
				handler: 'ActionExit'
			}
		]
	}

    const actions = {
        ActionAdd: function() {},
        ActionSaveAs: function() {},
        ActionExit: function() { console.log('ActionExit')}
    }

    function MenuComponent(config, actions) {
        this.MAX_WIDTH = 1000;
        this.config = config || {};
        this.actions = actions;
        this.container = null;
    }

    // MenuComponent.state = []

    MenuComponent.prototype.makeContainer = function() {
        const container = document.createElement('ul');
        this.checkMenuType();
        container.classList.add(this.config.type || 'row');
        return container;
    };

    MenuComponent.prototype.checkMenuType = function(type) {
        const innerWidth = window.innerWidth;
        this.config.type = innerWidth < this.MAX_WIDTH ? 'column' : 'row';
    }

    MenuComponent.prototype.makeItems = function(container) {
        const { items } = this.config;
        const fragment = document.createDocumentFragment();

        items.forEach(({title, handler}) => {
            const li = document.createElement('li');
            li.innerText = title;
            li.addEventListener('click', this.actions[handler]);
            fragment.append(li);
        });

        return fragment;
    };

    MenuComponent.prototype.makeMenu = function() {
        const container = this.makeContainer();
        const items = this.makeItems();
        container.append(items);
        this.container = container;

        return this;
    };

    MenuComponent.prototype.render = function() {
        if (this.container) {
            document.body.append(this.container);
        }

        return this;
    };


    const menu = new MenuComponent(data, actions);

    menu
    .makeMenu()
    .render();



    
}