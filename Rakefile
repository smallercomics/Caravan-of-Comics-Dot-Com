namespace :coc do

  require 'yaml'
  require 'erb'

  
  def erbify file
    return ERB.new(File.open( file ).read())
  end
  
  def write_out path, contents
    File.open(path, 'w') do |f|
      f.puts contents
    end
  end
  
  def make_a_page name,template
    page = template.result(Page.new('', File.open( './src/' + name + '.erb' ).read(), '' ).get_binding)
    write_out './' + name +'.html', page
  
  end
  
  class Artist
    def initialize (name,slug,first_name,content,links,books,images)
      @name = name || ""
      @slug = slug || ""
      @first_name = first_name || ""
      @content = content || ""
      @links = links || []
      @books = books || []
      @images = images || []
    end
    
    def get_binding
      return binding()
    end
    
    def write_path
      return './artist/' + @slug + '.html'
    end
  end
  
  class Page
    def initialize(title, content, bodyclass)
      @title = title
      @bodyclass=bodyclass
      @page_content = content
    end
    
    def get_binding
      return binding()
    end
  end
  
  
  
  desc 'Will assemble the website'
  task :assemble do
  
    main_template = erbify './src/template.erb'
    
    make_a_page 'index', main_template
    make_a_page 'about', main_template
    make_a_page 'friends', main_template
    make_a_page 'support', main_template
    
    artists = YAML::load( File.open( './src/artists.yml' ) )
    
    artists_template = erbify './src/artist.erb'
    
    artists.each do |a|
      puts a['name']
      artist = Artist.new a['name'], a['slug'], a['first_name'], a['content'], a['links'], a['books'], a['images']
      page = Page.new a['name'], artists_template.result(artist.get_binding), a['slug']
      rendered_page = main_template.result(page.get_binding)
      write_out artist.write_path, rendered_page 
    end
    
  end
  
  desc 'clean up after yourself'
  task :clean do
  
  end
end