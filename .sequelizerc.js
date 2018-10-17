import path from 'path';

export default  {
  'config': path.resolve('./server', 'config.json'),
  'migrations-path': path.resolve('./server', 'migrations'),
  'models-path': path.resolve('./server', 'models'),
  'seeders-path': path.resolve('./server', 'seeders')
}